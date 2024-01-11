function SectionHeading ({heading}) {
    return (
        <div className="section__heading">
            <hr className="section__heading--divider" />
            <h2 className="section__heading--title">{heading}</h2>
        </div>
    )
}

export default SectionHeading;