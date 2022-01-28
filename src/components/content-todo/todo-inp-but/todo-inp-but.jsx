import s from "./todo-inp-but.module.scss";
import React from "react";



function TodoInpBut({children}) {

  return (
    <div className={s.content}>
      {children}
    </div>
  );
}

export default TodoInpBut;