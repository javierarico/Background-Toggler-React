import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import userImage from './images/javiera.jpeg'

// Fuction to show month date year
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} style={{width: '10vw', borderRadius: '50%'}}/>
    <h2 className='user-title'>
      {firstName}
      <span> </span>
      {lastName}
    </h2>
  </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    //console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data
    return (
      <header>
        <div className='header-wrapper'>
          <h1 className='welcome'>{welcome}</h1>
          <h2 className='title'>{title}</h2>
          <h3 className='subtitle'>{subtitle}</h3>
          <p className='txt'>
            {firstName}<span> </span>{lastName}
          </p>
          <small className='txt-date'>{date}</small>
        </div>
      </header>
    )
  }
}

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
    } = this.props
    return (
      <main className='main'>
        <div className='main-wrapper'>
          <p className='main-txt'>Prerequisite to get started react.js:</p>
          <ul className='list-styles'>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p className='footer-txt'>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}


class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: '#fff',
      color: '#000',
    },
    hstyles: {
      backgroundColor: '#66e3ff',
      borderBottom: 'none',
    },
    fstyles: {
      backgroundColor: '#66e3ff',
      borderTop: 'none',
    },
  }
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  
  // method to handle time
  handleTime = () => {
    alert(this.showDate(new Date()))
  }

  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2022')
  }

  // method Toggler bgColor and color
  changeBackground = () => {
    console.log(this.state)
    //console.log(this.state.styles.backgroundColor)
    let bgcolor1 = '#fff'
    let bgcolor2 = '#000'
    let bgcolor = this.state.styles.backgroundColor === bgcolor1 ? bgcolor2 : bgcolor1
    let color1 = '#000'
    let color2 = '#fff'
    let color = this.state.styles.color === color1 ? color2 : color1
    this.setState({ styles: {backgroundColor: bgcolor, color: color }})
    //header
    let hbgcolor1 = '#66e3ff'
    let hbgcolor2 = '#000'
    let borderBottom1 = 'none'
    let borderBottom2 = '2px solid gray'
    let hbgcolor = this.state.hstyles.backgroundColor === hbgcolor1 ? hbgcolor2 : hbgcolor1
    let hborder = this.state.hstyles.backgroundColor === hbgcolor1 ? borderBottom2 : borderBottom1
    this.setState({ hstyles: {backgroundColor: hbgcolor, borderBottom: hborder}})
    //footer
    let fbgcolor1 = '#66e3ff'
    let fbgcolor2 = '#000'
    let borderTop1 = 'none'
    let borderTop2 = '2px solid gray'
    let fbgcolor = this.state.fstyles.backgroundColor === fbgcolor1 ? fbgcolor2 : fbgcolor1
    let fborder = this.state.fstyles.backgroundColor === fbgcolor1 ? borderTop2 : borderTop1
    this.setState({ fstyles: {backgroundColor: fbgcolor, borderTop: fborder}})
  }
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Javiera',
        lastName: 'Rico',
      },
      date: 'Sep 16, 2022',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: userImage }

    return (
      <div className='app' style={{backgroundColor: this.state.styles.backgroundColor, color: this.state.styles.color}}>
        <div className='header-div' style={{backgroundColor: this.state.hstyles.backgroundColor, borderBottom: this.state.hstyles.borderBottom}}>
          <Header data={data} />
        </div>
        <Main 
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
        />
        <div className='footer-div' style={{backgroundColor: this.state.fstyles.backgroundColor, borderTop: this.state.fstyles.borderTop}}>
          <Footer date={new Date()} />
        </div>
      </div>
    )
  }
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)