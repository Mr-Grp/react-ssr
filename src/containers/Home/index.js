import React, { Component } from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { getHomeList } from "./store/action";

class Home extends Component {
  componentDidMount() {
    this.props.getHomeList();
  }

  getList = (list) => {
    return list.map(item => {
      return <div key={item.id}>{item.title}</div>
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div>this is home</div>
        <div>{this.props.name}</div>
        <div>
          {this.getList(this.props.list)}
        </div>
        <button onClick={() => alert("click")}>click</button>
        <br />
      </div>
    );
  }
}

Home.loadData = (store) => {
  //负责在服务端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList())
}

const mapStateToProps = state => {
  return {
    name: state.home.name,
    list: state.home.newsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHomeList() {
      dispatch(getHomeList());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
