import TextCss from "./css/text.module.css"



function Text() {

    let firstName = "Devanshu"

    function handleValue(){
        firstName = "Manny"
        console.log(firstName)
    }
    console.log(firstName)


  return (
    <>

<h1>{firstName}</h1>
<button onClick={handleValue}>Update</button>
    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      <h1 className={TextCss.heading}>Text</h1>
      <p className={TextCss.p1}>
        This article is about the Republic of India. For other uses, see India
        ndia, officially the Republic of India is a country in South Sia. It is
        the seventh-largest country by area; the most populous country as of
        June and from the time of its independence in 1947, the world's most
        populous Bounded by the Indian Ocean on the south, the Arabian Sea on
        China, Nepal, and Bhutan to the north; and Bangladesh and yanmar to the
        east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the
        aldives; its Andaman and Nicobar Islands share a maritime border with
        Thailand, yanmar, and Indonesia.
      </p>

    </>
  );
}

export default Text;
