import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import marked from 'marked'
import hljs from 'highlight.js'
import { Row, Col, Breadcrumb, Icon, Affix } from 'antd'
import api from '../config/api'
import Header from '../components/Header'
import Author from '../components/Author'
import Advertise from '../components/Advertise'
import Footer from '../components/Footer'
import Tocify from '../components/tocify.tsx'
import 'highlight.js/styles/monokai-sublime.css'
import css from './index.less'

function Detail({ data: [item]}) {
  const tocify = new Tocify();
  const renderer = new marked.Renderer();
  renderer.heading = function(text, level) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  }
  marked.setOptions({
    renderer: renderer,
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
        <title>Detail</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Row type="flex" justify="center" className={css.main}>
        <Col xs={24} sm={24} md={16} lg={18} xl={14} className={css.left}>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item><Link href="/"><a>欧冠</a></Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link href="/list"><a>{item.typeName}</a></Link></Breadcrumb.Item>
            <Breadcrumb.Item>{item.title}</Breadcrumb.Item>
          </Breadcrumb>
          <Row type="flex" justify="center" className={css['detail-title']}>
            {item.title}
          </Row>
          <Row type="flex" justify="center" className={css['list-icon']}>
            <span><Icon type="calendar" /> {item.addTime}</span>
            <span><Icon type="folder" /> {item.typeName}</span>
            <span><Icon type="fire" /> {item.view_count}人</span>
          </Row>
          <Row className={css['detail-content']} dangerouslySetInnerHTML={{ __html: marked(item.article_content) }}></Row>
        </Col>
        <Col xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advertise />
          <Affix offsetTop={5}>
            <Row className="box">
              <Row type="flex" justify="center" className={css['nav-title']}>文章目录</Row>
              <div className={css['toc-list']}>
                {tocify && tocify.render()}
              </div>
            </Row>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Detail.getInitialProps = async function(context) {
  const { id } = context.query
  const promise = new Promise((resolve) => {
    axios.get(`${api.detail}/${id}`).then(({ data }) => {
      resolve({ data })
    })
  })
  return await promise
}

export default Detail
