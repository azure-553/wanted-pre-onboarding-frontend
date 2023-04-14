import React from "react";

export default function Main() {
  return (
    <div>
      <h3>원하시는 링크로 이동하실 수 있습니다.</h3>
      <p>
        <button>
          <a href="/signup">/signup</a>
        </button>
        <button>
          <a href="/signin">/signin</a>
        </button>
        <button>
          <a href="/todo">/todo</a>
        </button>
      </p>
    </div>
  );
}
