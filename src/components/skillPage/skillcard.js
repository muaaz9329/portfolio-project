function SkillCard(props) {
    const image = props.image
    return (<div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <div className={`${props.visb}${props.animate}`}>
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl" src={image}></img>
          <div className="px-8 py-10 relative z-10 w-full border-4  border-cusBlue bg-cusBlue rounded-3xl opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>);
  }
  export default SkillCard;