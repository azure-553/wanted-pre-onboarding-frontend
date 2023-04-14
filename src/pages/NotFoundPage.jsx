import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>
            <h1>페이지를 찾을 수 없습니다 :{"("} </h1>
            <Link to='/'>메인으로 돌아가기</Link>
    </div>
  )
}
