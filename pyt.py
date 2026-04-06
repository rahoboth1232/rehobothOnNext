import numpy as np
import matplotlib.pyplot as plt

# =============================
# INPUT DATA
# =============================

# Replace with your actual 52 weekly DNI values (W/m²)
DNI_weekly = np.array([
    600, 620, 650, 680, 700, 720, 750, 780, 800, 820, 850, 870,
    880, 890, 900, 910, 920, 910, 900, 880, 860, 840, 820, 800,
    780, 760, 740, 720, 700, 680, 660, 640, 620, 600, 580, 560,
    540, 520, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680,
    700, 720, 740, 760
])

mirror_area = 4          # m² (2m x 2m)
num_heliostats = 200
tower_height = 15        # m

# Receiver geometry
receiver_diameter = 1    # m
receiver_height = 2      # m
receiver_area = np.pi * receiver_diameter * receiver_height

# Optical properties
eta_opt = 0.7
reflectivity = 0.9
intercept_eff = 0.95

# Location: Jodhpur
latitude = np.radians(26.24)

# Atmospheric attenuation coefficient
k_atm = 0.00012

# =============================
# SOLAR FUNCTIONS
# =============================

def solar_declination(day):
    return np.radians(23.45 * np.sin(np.radians((360/365)*(284 + day))))

def cosine_efficiency(decl):
    return max(np.cos(latitude - decl), 0)

def atmospheric_eff(distance):
    return np.exp(-k_atm * distance)

# =============================
# RADIAL STAGGERED LAYOUT
# =============================

def generate_field(num_heliostats):
    positions = []
    ring_spacing = 3
    count = 0
    ring = 1

    while count < num_heliostats:
        radius = ring * ring_spacing
        mirrors_in_ring = int(2 * np.pi * radius / 3)

        for i in range(mirrors_in_ring):
            if count >= num_heliostats:
                break

            theta = i * (2*np.pi / mirrors_in_ring)

            # Staggering
            if ring % 2 == 0:
                theta += np.pi / mirrors_in_ring

            x = radius * np.cos(theta)
            y = radius * np.sin(theta)

            positions.append([x, y])
            count += 1

        ring += 1

    return np.array(positions)

heliostat_positions = generate_field(num_heliostats)

# =============================
# CALCULATIONS
# =============================

thermal_output = []
flux_output = []

for week in range(52):
    day = week * 7 + 1
    decl = solar_declination(day)

    cos_eff = cosine_efficiency(decl)

    total_power = 0

    for pos in heliostat_positions:
        distance = np.sqrt(pos[0]**2 + pos[1]**2 + tower_height**2)
        atm_eff = atmospheric_eff(distance)

        power = (DNI_weekly[week] *
                 mirror_area *
                 eta_opt *
                 reflectivity *
                 intercept_eff *
                 cos_eff *
                 atm_eff)

        total_power += power

    thermal_output.append(total_power)
    flux_output.append(total_power / receiver_area)

thermal_output = np.array(thermal_output)
flux_output = np.array(flux_output)

# =============================
# ANNUAL ENERGY (kWh)
# =============================

annual_energy = np.sum(thermal_output * 7 * 24) / 1000
print("Annual Energy (kWh):", annual_energy)

# =============================
# EXPORT FLUX (.PROF FILE)
# =============================

with open("flux_profile.prof", "w") as f:
    f.write("((flux_profile point 52)\n")
    for i in range(52):
        f.write(f"{i} {flux_output[i]}\n")
    f.write(")\n")

print("Flux profile saved as flux_profile.prof")

# =============================
# PLOTTING
# =============================

# 1. Layout Plot
plt.figure()
plt.scatter(heliostat_positions[:,0], heliostat_positions[:,1])
plt.scatter(0, 0, marker='x')  # Tower
plt.title("Radial Staggered Heliostat Field")
plt.xlabel("X (m)")
plt.ylabel("Y (m)")
plt.axis('equal')
plt.grid()

# 2. Weekly Thermal Output
plt.figure()
plt.plot(range(1,53), thermal_output)
plt.title("Weekly Thermal Output")
plt.xlabel("Week")
plt.ylabel("Power (W)")
plt.grid()

# 3. Weekly Heat Flux
plt.figure()
plt.plot(range(1,53), flux_output)
plt.title("Weekly Heat Flux")
plt.xlabel("Week")
plt.ylabel("Flux (W/m²)")
plt.grid()

plt.show()

