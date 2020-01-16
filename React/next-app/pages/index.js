import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import marked from 'marked'
import hljs from 'highlight.js'
import { Row, Col, List, Icon } from 'antd'
import Head from 'next/head'
import api from '../config/api'
import Header from '../components/Header'
import Author from '../components/Author'
import Advertise from '../components/Advertise'
import Footer from '../components/Footer'
import 'highlight.js/styles/monokai-sublime.css'
import css from './index.less'

function Home({ data }) {
  const [list, setList] = useState(data)

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Row type="flex" justify="center" className={css.main}>
        <Col xs={24} sm={24} md={16} lg={18} xl={14} className={css.left}>
          <List
            header={<div>最新赛程</div>}
            itemLayout="vertical"
            dataSource={list}
            renderItem={item => (
              <List.Item>
                <div className={css['list-title']}>
                  <Link href={{ pathname: '/detail', query: { id: item.id }}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className={css['list-icon']}>
                  <span><Icon type="calendar" /> {item.addTime}</span>
                  <span><Icon type="folder" /> {item.typeName}</span>
                  <span><Icon type="fire" /> {item.view_count}人</span>
                </div>
                <div className={css['list-context']} dangerouslySetInnerHTML={{ __html: item.introduce }}></div>
              </List.Item>
            )} />
        </Col>
        <Col xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advertise />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Home.getInitialProps = async function() {
  const promise = new Promise(resolve => {
    axios.get(api.list).then(({ data }) => {
      resolve({ data })
    })
  })
  return await promise
}

export default Home
