function SectionHeading ({heading}) {
    const id = heading.toLowerCase();
    return (
        <div className="section__heading">
            <hr className="section__heading--divider" />
            <h2 id={id} className="section__heading--title">{heading}</h2>
        </div>
    )
}

export default SectionHeading;