import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactTooltip from 'react-tooltip';

export default [
  {
    "application": "Energy",
    "researchTopic": "Fuel Cell Catalyst Longevity",
    "institution": "University of Waterloo",
    "group": {"name": "Applied Nanomaterials and Clean Energy Laboratory", "url": "http://chemeng.uwaterloo.ca/zchen"},
    "pi": "Dr. Zhongwei Chen",
    "doi": "10.1039/c6ra19924k",
    "summaryImage": {"location": "/electrocatalyst-orr.png", "caption": "ORR polarization curve of Pt-alloy w/ sulfur-doped graphene compared to commercial catalysts after accelerated testing. Adapted from C. Xu et al, doi:10.1039/c6ra19924k. © 2016 Royal Society of Chemistry"},
    "body":
      <div>
        <p>
          Hydrogen fuel cells offer an avenue for emission-free energy generation via electrochemical reactions. Electrochemical energy generation boasts greater efficiencies than the hydrocarbon combustion processes widely used today, and the only product of the reaction is water.
        </p>
        <p>
          Polymer electrolyte membrane fuel cells (PEMFCs) are particularly attractive due to their relatively low operating temperatures. However, fuel cells currently rely on catalysts made of platinum supported by carbon black. Over time, these expensive catalysts degrade from continued use despite PEMFCs operating at cooler temperatures than other fuel cells.
        </p>
        <p>
          ANCEL had previously demonstrated the use of sulfur-doped graphene to mitigate this degradation for pure Pt crystals as compared to traditional carbon supports. While the crystal facets of pure Pt can be tailored for maximum effect, literature has also demonstrated that Pt-alloy nanoparticles provide higher catalytic capabilities over Pt alone through phenomena such as lattice strain effects.
        </p>
        <p>
          My research focused on the previously unknown compatibility of sulfur-doped graphene supports with heterogenous Pt nanoparticles as well as the support's overall effects on catalytic performance and catalyst durability for practical long-term use.
        </p>
        <p>
          For more detailed information, see <a href="https://doi.org/10.1039/c6ra19924k" className="doi" data-tip data-for="10.1039/c6ra19924k"><u>doi:10.1039/c6ra19924k</u></a>.
        </p>
        <ReactTooltip id="10.1039/c6ra19924k" type="light" effect="solid" html={true}>
          {ReactDOMServer.renderToString(
            <>
              <mark>C. Xu</mark>, M. A. Hoque, G. Chiu, T. Sung, and Z. Chen, “Stabilization of platinum-nickel alloy nanoparticles with sulfur-doped graphene support in polymer electrolyte membrane fuel cells,” <cite>RSC Adv.</cite>, vol. 6, pp. 112226–112231, 2016.
            </>
          )}
        </ReactTooltip>
      </div>
  },
  {
    "application": "Medicine",
    "researchTopic": "Medical Adhesives",
    "institution": "Harvard-MIT Division of Health Sciences and Technology",
    "group": {"name": "Karp Lab", "url": "https://karplab.net"},
    "pi": "Dr. Jeffrey Karp",
    "doi": "10.1002/adhm.201500419",
    "summaryImage": {"location": "/adhesive-2.png", "caption": "(a) Polymerization and (b) single-emulsion fabrication schema for HLAA-based NanoGlue, with (c) dispersity distributions. From Y. Lee et al, doi:10.1002/adhm.201500419. © 2015 WILEY-VCH Verlag GmbH & Co. KGaA, Weinheim"},
    "body":
      <div>
        <p>
          Surgical wound closure can be achieved through traditional tools such as staples and sutures, but surgical glues have huge advantages in practicality and post-surgery conditions. These adhesive glues are typically administered to sites using a variety of techniques.
        </p>
        <p>
          The Karp Lab conducted previous work in tissue-adhesive glues and patches, and techniques involving injectable adhesives provide means of wound closure where bulky alternatives are impractical. One challenge of this technique is the actual ease of injecting a robust adhesive through a small-bore needle.
        </p>
        <p>
          I worked closely with Dr. Yuhan Lee (who since became Instructor of Medicine at Harvard Medical School) where his postdoctoral research at the lab involved the ability to easily administer a pre-cured adhesive solution through needles and trocars yet still form a glue with strong adhesive properties after curing in surgical sites.
        </p>
        <p>
          My research contributions in this topic focused on the materials characterization of polymer candidates such as PGSA to understand the change in pre- and post-curing properties of the desired medical adhesive."
        </p>
        <p>
          For more detailed information, see <a href="https://doi.org/10.1002/adhm.201500419" className="doi" data-tip data-for="10.1002/adhm.201500419"><u>doi:10.1002/adhm.201500419</u></a>.
        </p>
        <ReactTooltip id="10.1002/adhm.201500419" type="light" effect="solid" html={true}>
          {ReactDOMServer.renderToString(
            <>
              Y. Lee, C. Xu, M. Sebastin, A. Lee, N. Holwell, <mark>C. Xu</mark>, D. Miranda Nieves, L. Mu, R. S. Langer, C. Lin, and J. M. Karp, “Bioinspired Nanoparticulate Medical Glues for Minimally Invasive Tissue Repair,” <cite>Adv. Healthc. Mater.</cite>, vol. 4, no. 16, pp. 2587–2596, 2015.
            </>
          )}
        </ReactTooltip>
      </div>
  }
]