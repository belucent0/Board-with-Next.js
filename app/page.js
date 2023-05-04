import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  let myName = 'JaeGwang KIM'

  return (
    <div>
      <h4 className="title">바디 페이지</h4>
      <p className="title-sub">by dev {myName}</p>
      <h4><a href='http://localhost:3000/list'></a>상품리스트</h4>
    </div>
  );
}