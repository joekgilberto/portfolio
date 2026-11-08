import Content from "../components/Content";
import attributionImage from "../assets/attribution.jpeg";
import AttributionInfo from "../components/AttributionInfo";
import { FaFileImage } from "react-icons/fa6";
import { FaFont } from "react-icons/fa6";

export default function Attribution() {
  return (
    <Content
      title="Attributions"
      image={attributionImage}
      imageAlt="Joe Gilberto pointing at viewer."
    >
      <p>
        Below are attributions for the assets used throughout my portfolio.
        Thank you to the contributors for their works.
      </p>
      <AttributionInfo icon={<FaFileImage />} title="Background Photo">
        <p>
          <a
            href="https://unsplash.com/photos/green-linear-leafed-plants-jqgsM3B9Fpo"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            Photo
          </a>{" "}
          by{" "}
          <a
            href="https://unsplash.com/@yoal_desurmont"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            Yoal Desurmont
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            Unsplash
          </a>
        </p>
      </AttributionInfo>
      <AttributionInfo icon={<FaFileImage />} title="Favicon">
        <p>
          <a
            href="https://unsplash.com/illustrations/collection-of-ripe-and-unripe-bananas-and-peels-iuOKg5WZcRo"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            Photo
          </a>{" "}
          by{" "}
          <a
            href="https://unsplash.com/@grapheezy/illustrations"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            M Umar Farooq
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            Unsplash
          </a>
        </p>
      </AttributionInfo>
      <AttributionInfo icon={<FaFont />} title="Header Font">
        <p>
          Copyright 2023 The Playwrite Project Authors (
          <a
            href="https://github.com/TypeTogether/Playwrite"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            https://github.com/TypeTogether/Playwrite
          </a>
          ) This Font Software is licensed under the{" "}
          <a
            href="https://openfontlicense.org/open-font-license-official-text/"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            SIL Open Font License, Version 1.1
          </a>
          . This license is copied below, and is also available with a FAQ at:{" "}
          <a
            href="https://openfontlicense.org"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            https://openfontlicense.org
          </a>
          <br />
          <br />
          <a
            href="https://openfontlicense.org/open-font-license-official-text/"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            SIL OPEN FONT LICENSE Version 1.1
          </a>{" "}
          - 26 February 2007
        </p>
      </AttributionInfo>
      <AttributionInfo icon={<FaFont />} title="Body Font">
        <p>
          Copyright 2025 The Xmind Project Authors (
          <a
            href="https://github.com/lamzhonghang/xmind"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            https://github.com/lamzhonghang/xmind
          </a>
          ) This Font Software is licensed under the{" "}
          <a
            href="https://openfontlicense.org/open-font-license-official-text/"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            SIL Open Font License, Version 1.1
          </a>
          . This license is copied below, and is also available with a FAQ at:{" "}
          <a
            href="https://openfontlicense.org"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            https://openfontlicense.org
          </a>
          <br />
          <br />
          <a
            href="https://openfontlicense.org/open-font-license-official-text/"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-2 underline-offset-3"
          >
            SIL OPEN FONT LICENSE Version 1.1
          </a>{" "}
          - 26 February 2007
        </p>
      </AttributionInfo>
    </Content>
  );
}
