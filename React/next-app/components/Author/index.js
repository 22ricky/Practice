import { Avatar, Divider } from 'antd'
import css from './index.less'

function Author() {
  return (
    <div className={`${css.author} box`}>
      <div><Avatar size={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwRkChp4Hyo1JKUl28lsZdaybnmvDk6yDu_yLP5NPXAM2ERwm&s" /></div>
      <div className={css.info}>
        米兰足球俱乐部（Associazione Calcio Milan）是一家位于意大利北部伦巴第大区米兰市的足球俱乐部。为了和同在米兰的另一家足球俱乐部国际米兰区别，一般被称为AC米兰，目前于意大利足球甲级联赛比赛。
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className={css.account} />
        <Avatar size={28} icon="qq" className={css.account} />
        <Avatar size={28} icon="wechat" className={css.account} />
      </div>
    </div>
  )
}

export default Author