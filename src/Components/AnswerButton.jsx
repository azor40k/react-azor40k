import '../Sass/components/AnswerButton.scss';

const AnswerButton = ({ color, answer, setQuestionNb }) => {

  const submitAnswer = (e) => {
        // const clickedValue = e.target.innerText;
        console.log(answer[1])


        setTimeout(() => {
            setQuestionNb(prev => prev + 1 )        
        }, 500)
           
  }

        return (
        <button className={ `AnswerButton ${color}`} onClick={(e) => submitAnswer(e)}>{answer[0]}</button>
)};

export default AnswerButton;