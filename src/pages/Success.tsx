import { Link } from 'react-router-dom'

export function Success() {
  return (
    <div className="container success">
      <h1>Thanks for reaching out</h1>
      <p>Your message was sent successfully. I will get back to you soon.</p>
      <Link className="btn btn--primary" to="/">
        Back to home
      </Link>
    </div>
  )
}
