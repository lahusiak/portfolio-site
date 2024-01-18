import "./section.css";
import SectionHeading from "./heading";


const DATA = [
    {
        heading: "Experience",
        items: [
            {
                dateStart: "2020",
                dateEnd: "2023",
                jobTitle: "Accessibility Lead",
                company: "BuzzFeed",
                jobDescription: "Brief narrative of my role"
            },
            {
                dateStart: "2020",
                dateEnd: "2023",
                jobTitle: "Accessibility Lead",
                company: "BuzzFeed",
                jobDescription: "Brief narrative of my role"
            },
            {
                dateStart: "2020",
                dateEnd: "2023",
                jobTitle: "Accessibility Lead",
                company: "BuzzFeed",
                jobDescription: "Brief narrative of my role"
            }
        ]    
    }, 
    {
        heading: "Projects",
        items: [
            {
                dateStart: "2020",
                dateEnd: "2023",
                jobTitle: "Accessibility Lead",
                company: "BuzzFeed",
                jobDescription: "Brief narrative of my role"
            },
            {
                dateStart: "2020",
                dateEnd: "2023",
                jobTitle: "Accessibility Lead",
                company: "BuzzFeed",
                jobDescription: "Brief narrative of my role"
            },
            {
                dateStart: "2020",
                dateEnd: "2023",
                jobTitle: "Accessibility Lead",
                company: "BuzzFeed",
                jobDescription: "Brief narrative of my role"
            }
        ]
    }
]

// TODO: Add section styling for projects and anything else
// TODO: Maybe add About heading here instead
function SectionContent({ sections }) {
    return (
      <>
        {sections.map((section) => {
          const { heading, items } = section;
          const formattedHeading = heading.toLowerCase();
          return (
            <section aria-labelledby={formattedHeading} tabIndex={-1} key={heading} className="section__container">
              <SectionHeading heading={heading} />
              <ul className="section__list">
              {items.map((item, index) => (
                (heading === "Experience" || heading === "Projects") && (
                  <li key={index}>
                    <div>{item.dateStart}-{item.dateEnd}</div>
                    <h3 className="section__list--item-title">
                      <div>{item.jobTitle}</div>
                      <div>{item.company}</div>
                    </h3>
                    <p>{item.jobDescription}</p>
                  </li>
                )
              ))}
              </ul>
            </section>
          );
        })}
      </>
    );
  }
  
  function Section() {
    return <SectionContent sections={DATA} />;
  }

export default Section;