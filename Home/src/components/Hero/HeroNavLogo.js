import { withEmotionCache } from "@emotion/core";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const HeroNavLogo = () => <h2 css = {styles}>BasicReview</h2>

const styles = css`
    font-size: 22px;
    color: #FFB6C1;
    font-weight: 900;
    user-select: none;
`;


export default HeroNavLogo;