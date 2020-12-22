import React, { useState } from 'react';
import { render } from 'react-dom';
import { Input, Form, Button, ConfigProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import axios from 'axios'

moment.locale('zh-cn');

const App = () => {


  axios({
    method: "GET",
    url: `http://127.0.0.1:9999/index/`
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });

  var tkName = ["『他』截止、终止、申し込みを~~/ 截止报名",
    "『他』（把文章）分成段落、（把事物）划分为阶段",
    "『自』劲头十足、精神百倍 ",
    "『自』追上、赶上、挽回（损失）",
    "『自』横穿、横过、道を~~/ 横穿马路",
    "『他』想出来、想起",
    "『自』收拾整齐、整顿好、娘が~いた/ 女儿出嫁了",
    "『自』靠近、临近、歳末が~~/ 迫近年底、亲近、接近",
    "『他』接受、責任を~~/ 承担责任、保证、身元を~/ 人身担保",
    "『自』返回、折回 ",
    "『他』留、挽留、劝止、阻止",
    " 『他』申请、",
    "『他』想起来、联想起来",
    "『自』飞起来、跳出、跑出",
    "『自』售完、销售一空",
    "『自』搬家、迁居",
    "『自』注意到、感觉到、认识到（错误）",]


  var str = [];
  for (let i = 0; i < tkName.length; i++) {
    str.push(
      <div>{tkName[i]}</div>,
      <Input defaultValue="请输入答案" size="large" />,
    )
  }


  return (
    str
  );
};

render(<App />




  , document.getElementById('root'));