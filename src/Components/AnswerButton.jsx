import '../Sass/components/AnswerButton.scss';

const AnswerButton = ({ color, answer, setQuestionNb, changeToGray, setBaseColors, setScore, setQuestionIncrement, disableButton, setDisableButton }) => {

  const submitAnswer = () => {
        answer[1] === true ? setScore(prevScore => prevScore + 1) : console.log('FAUX');
        setDisableButton(true)
        changeToGray();
        setTimeout(() => {
            setQuestionNb(prev => prev + 1 );
            setBaseColors(["red", "blue", "orange", "green"]);
            setQuestionIncrement(prevState => prevState + 1);  
            setDisableButton(false);
        }, 3000)         
  }
  return (
        <button disabled={disableButton} className={ `AnswerButton ${color}`} onClick={submitAnswer}>{answer[0]}</button>
)};

export default AnswerButton;