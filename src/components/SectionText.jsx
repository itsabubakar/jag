const SectionText = ({ ch, cp, sm, subtitle, children, title, parag }) => {
    return (
        <div className={`max-w-[685px] mx-auto pb-[120px] px-5 lg:px-0`}>
            <div className="pb-6">
                <h2 className={`${sm ? 'text-2xl' : 'text-[32px]'} ${ch ? 'text-center' : ''} font-open-sans font-semibold`}>{title}</h2>
                {subtitle && <h3 className="font-open-sans font-semibold text-lg text-center">{subtitle}</h3>}
            </div>

            {children && <p className={`${cp ? 'text-center' : 'text-left'} font-poppins`}>{children}</p>}
            {parag && parag.map((p, index) => {
                return <p key={index} className={`${cp ? 'text-center' : 'text-left'} font-poppins py-1`}>{p}</p>
            })}

        </div>
    )
}
export default SectionText