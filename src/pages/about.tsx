import React from 'react';
import Layout from 'components/layout';

export default function About() {
  return (
    <Layout title="About Us">
      <div className="jumbotron">
        <div className="p-5">
          <h1>ABOUT US</h1>
          <p>
            santas warehouse is a non-profit organization which provides
            children who are unfortunate and differently abled with gifts on
            christmas.This organization is determined to help these children to
            live a happpy , loving childhood which they can be proud of.
          </p>
          <p>
            we are an enterprise which helps the poor and unfortunate children
            to enjoy christmas and get a bit of happiness and joy in their lives
            by becoming their mysterious santa claus and providing them with
            gifts on christmas.
          </p>
        </div>
        <div className="p-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNyOC1QgmLEpBCleuRY5MpWj2BuaC0Pe_1Q&usqp=CAU"
            alt="Santa Claus"
            width="900px"
          />
        </div>

        <div className="p-5">
          <h2>
            <u>OUR VISION:</u>
          </h2>
          <p>
            To create a world one day in which no child is seen with a gloomy
            face on christmas and that each and every child is so filled with
            happiness that it lights up the world.
          </p>
        </div>
      </div>
    </Layout>
  );
}
