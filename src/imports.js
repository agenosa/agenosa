import vuedemo from "./videos/vuedemo.mp4";
import vue_logo from "./images/vue_logo.svg";

import reactdemo from "./videos/reactdemo.mp4"
import react_logo from "./images/react_svg.svg"

import angulardemo from "./videos/angulardemo.mp4";
import angular_logo from "./images/angular_svg.svg";

import csharp_logo from "./images/csharp_logo.svg";
import csharpdemo from "./videos/csharpdemo.mp4";

import projectp3demo  from "./videos/projectp3demo.mp4"

import html_logo from "./images/html_logo.svg";
import css_logo from "./images/css_logo.svg"
import node_logo from "./images/node_svg.svg";
import javascript_logo from "./images/javascript_logo.svg";
import android_logo from "./images/android_logo.svg";
import mysql_logo from "./images/mysql_logo.svg";
import sqlserver_logo from "./images/sqlserver_logo.svg";
import python_logo from "./images/python_logo.svg";
import aws_logo from "./images/aws_logo.svg";
import tailwind_logo from "./images/tailwind-css-2.svg"
import express_logo from "./images/express_logo.svg"

import swift_logo from "./images/swift_logo.svg"
import php_logo from "./images/php_logo.svg"

// Fade right animation
export const fadeRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};
// Fade left animation
export const fadeLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};
// Toggle function for styled components props
export const toggle = (field, a, b) => (field ? a : b);

// Typing animation for sentences
export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.045,
    },
  },
};


export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Project Data 
const files = {
  vue: {
    video: vuedemo,
    logo: vue_logo,
  },
  angular: {
    video: angulardemo,
    logo: angular_logo,
  },
  csharp: {
    video: csharpdemo,
    logo: csharp_logo,
  },
  react: {
    video: reactdemo,
    logo: react_logo,
  },
  projectp3: {
    video: projectp3demo,
  },
  node: {
    logo: node_logo,
  },
  android: {
    logo: android_logo,
  },
  javascript: {
    logo: javascript_logo,
  },
  mysql: {
    logo: mysql_logo,
  },
  msserver: {
    logo: sqlserver_logo,
  },
  python: {
    logo: python_logo,
  },
  aws: {
    logo: aws_logo,
  },
  tailwind: {
    logo: tailwind_logo
  },
  html: {
    logo: html_logo
  },
  css: {
    logo: css_logo
  },
  express: {
    logo: express_logo
  },
  swift: {
    logo: swift_logo
  },
  php: {
    logo: php_logo
  }
};


export default files;
