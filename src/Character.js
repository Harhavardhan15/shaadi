import React from "react";
import styled from "styled-components";
import axios from "axios";
import LazyLoad from "react-lazyload";

class PlaceHolder extends React.Component {
  render() {
    return <Loading />;
  }
}

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=500").then((response) => {
      console.log(response.data.results);
      this.setState({ list: response.data.results });
    });
  }

  renderImages = () => {
    return this.state.list.map((item, i) => {
      return (
        <MyLazyLoad
          placeholder={<Loading />}
          once={true}
          height={300}
          offset={0}
          resize={true}
          key={i}
        >
          <p>
            {item.name.first} {item.name.last}
          </p>
          <MyImage key={i} src={item.picture.thumbnail} />
        </MyLazyLoad>
      );
    });
  };

  render() {
    return (
      <Container>
        <ul className="contactlist">{this.renderImages()}</ul>
      </Container>
    );
  }
}

const MyLazyLoad = styled(LazyLoad)`
  display: grid;
  background: white;
  padding: 10px;
  justify-content: c;
  grid-template-columns: auto 60px;
  grid-gap: 20px;
  border-bottom: 1px solid #f2f2f2;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MyImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-bottom: 10px;
`;

const Loading = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  margin-bottom: 10px;
`;

export default Characters;
