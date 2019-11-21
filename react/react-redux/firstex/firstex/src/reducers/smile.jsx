import smilep from "../img/smile.png";
import sadp from "../img/sad.png";
import neutral from "../img/neutral.png";
export default (state, action) => {
  switch (action.type) {
    case "SMILE":
      return (state = smilep);
    case "CRY":
      return (state = sadp);
    default:
      return (state = neutral);
  }
};
