

class TrumpMe extends React.Component{
  constructor(){
    super();
    this.state = { speech: ''};
  }

  trumpMe(){
    let s = document.getElementById("45th").value;
  document.getElementById("45th").value = "";
    let v = s.replace(/I\b/, 'I the greatest ever');
    let w = v.replace(/and\b/, 'and am the best, and');
    let x = w.replace(/name/, ' name \,the best name ever\,')
    let y = x.replace(/the/, 'the greatest');
    let a = y.replace(/to/, 'to make America Great Again\, but also to');
    let b = a.replace(/a\b/, 'a wall\, mexico will pay for, best wall ever\, and also a');
    let c = b.replace(/we/, 'we you and me my hands bigger than yours');
    let d = c.replace(/if/, '');
    let e = d.replace(/money/, 'billions and billions and billions');
    let f = e.replace(/cat/, 'grab em by the pussy');

    this.setState({ speech: f});
  }
  render(){
    let yo = this.state.speech;
    return (

      <div>
      <h1>
      Trump Me!!
      </h1>
      <h2>
      How would the Donald say it??
      </h2>
       <h3>
         {yo}
        </h3>

        <div>
         <input type="text" id="45th" placeholder="let the Donald say it for you, write something" />
         <button type="button" onClick={() => this.trumpMe()}>Trump Me</button>
        </div>
     </div>

    )
  }
}

ReactDOM.render(<TrumpMe />, document.getElementById('rootbeer'));
