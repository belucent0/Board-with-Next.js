import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  let myName = 'JaeGwang KIM'
  let products = ['Tomatoes', 'Pasta', 'Coconut']
  let a = [20, 30, 40]
  console.log(a)
  let list = '/list'


  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="http://localhost:3000/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='http://localhost:3000/list'>
                  List
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <h4 className="title" style={{ color: "red", fontSize: "30px" }}>
        바디 페이지
      </h4>
      <p className="title-sub">by dev {myName}</p>
      <h4><a href='http://localhost:3000/list'></a>상품리스트</h4>
    </div>
  );
}