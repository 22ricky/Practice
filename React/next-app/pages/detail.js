import React from 'react'
import { Row, Col, Breadcrumb, Icon } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Author from '../components/Author'
import Advertise from '../components/Advertise'
import Footer from '../components/Footer'
import css from './index.less'


const Detail = () => (
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
          <Breadcrumb.Item><Link href="/list"><a>联赛</a></Link></Breadcrumb.Item>
          <Breadcrumb.Item>详情</Breadcrumb.Item>
        </Breadcrumb>
        <Row type="flex" justify="center" className={css['detail-title']}>
          远征红黑军 | 桑巴元素点缀，闪耀红黑军团
        </Row>
        <Row type="flex" justify="center" className={css['list-icon']}>
          <span><Icon type="calendar" /> 2019.11.28</span>
          <span><Icon type="folder" /> 联赛</span>
          <span><Icon type="fire" /> 1000人</span>
        </Row>
        <Row className={css['detail-content']}>
          MarkDown
        </Row>
      </Col>
      <Col xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Advertise />
      </Col>
    </Row>
    <Footer />
  </>
)

export default Detail
