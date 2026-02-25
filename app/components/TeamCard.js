"use client"

const TeamCard = ({ Name, title, image, desc, skills, social }) => {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div 
      className="relative bg-white border border-blue-200 rounded-2xl p-6 text-center hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
      onMouseEnter={() => setShowSocial(true)}
      onMouseLeave={() => setShowSocial(false)}
    >
      {/* Profile Image */}
      <div className="relative w-28 h-28 mx-auto mb-4">
        {image ? (
          <img 
            src={image} 
            alt={Name} 
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110" 
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center border-4 border-blue-100 group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110">
            <span className="text-3xl font-bold text-white">{Name.charAt(0)}</span>
          </div>
        )}
        
        {/* Online Status Indicator */}
        <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-400 border-4 border-white rounded-full"></div>
      </div>
      
      {/* Name & Title */}
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{Name}</h3>
      <p className="text-blue-600 text-sm mb-3 font-medium">{title}</p>
      
      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {desc}
      </p>
      
      {/* Skills Badges */}
      {skills && (
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {skills.map((skill, idx) => (
            <span 
              key={idx}
              className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium hover:bg-blue-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
      
      {/* Social Links - Slide up on hover */}
      <div className={`flex gap-3 justify-center transition-all duration-500 ${
        showSocial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {social?.linkedin && (
          <a 
            href={social.linkedin} 
            className="w-9 h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
          </a>
        )}
        {social?.twitter && (
          <a 
            href={social.twitter} 
            className="w-9 h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={16} />
          </a>
        )}
        {social?.github && (
          <a 
            href={social.github} 
            className="w-9 h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
          </a>
        )}
        {social?.email && (
          <a 
            href={`mailto:${social.email}`} 
            className="w-9 h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Mail size={16} />
          </a>
        )}
      </div>
    </div>
  )

}