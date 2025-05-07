import { Globe, Thermometer, AlertTriangle } from "lucide-react";
import { Tooltip } from "react-tooltip";

import greenhouseAnimation from "../../assets/greenhouse-effect.gif";

import "../../styles/Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="content">
        <div className="text-content">
          <h1>
            <Globe size={28} color="var(--primary-color)"/>
            Climate Change 
          </h1>

          <div className="paragraph">
            <Thermometer size={44} color="var(--primary-color)"/>
            <p>
              Global temperatures have risen by about{" "}
              <span className="temp-color">1.1°C </span>since pre-industrial
              times, with human activities accounting for roughly 1.0°C of that
              increase.
            </p>
          </div>

          <div className="highlight">
            <AlertTriangle size={44} color="var(--primary-color)"/>
            <div>
              <p>
                If we keep going like we are{" "}
                <strong data-tooltip-id="RCPTip">(RCP 8.5 scenario)</strong>,
                temperatures could rise by 2.6 to 4.8°C by 2100, which might
                make around 19% of land too hot to live on.
              </p>
              <Tooltip id="RCPTip" place="top" effect="solid">
                RCP 8.5: A high-emission scenario predicting a 2.6-4.8°C rise in
                global temperatures by 2100 with limited action on climate
                change.
              </Tooltip>
              <p>
                The{" "}
                <strong data-tooltip-id="ParisAgreementTip">
                  Paris Agreement
                </strong>{" "}
                aims to keep warming below 1.5°C. To do that, we need to cut CO₂
                by 45% by 2030 (compared to 2010 levels) and reach net-zero by
                2050.
              </p>
              <Tooltip id="ParisAgreementTip" effect="solid">
                The Paris Agreement is a global treaty, created in 2015, with
                197 countries committed to tackling climate change by reducing
                emissions.
              </Tooltip>
            </div>
          </div>
        </div>

        <figure className="image-container">
          <img
            src={greenhouseAnimation}
            alt="Greenhouse effect visualization"
          />
          <figcaption>
            {" "}
            The above is an animation of how sunlight rays are trapped by
            greenhouse gases. Credit: NASA/JPL-Caltech
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Intro;
