import { createGlobalStyle } from 'styled-components';
import pageBg from '../assets/pageBg.png';

export const Globalstyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background: url(${pageBg}) center center no-repeat;
    background-size: cover;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .textOverHandle{
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  // 自定义模块
  .ant-layout-header {
    background: transparent !important;
    padding: 0;
  }
  .default-chart{
    width: 100%;
    height: 100%;
  }
  .custom-modal {
    .dv-border-box-13 {
      height: 7.75rem;
    }
    .ant-modal-content {
      position: relative;
      background-color: rgba(0, 0, 0, 0.6) !important;
      height: 100%;
      border: 0;
      border-radius: 4px;
      background-clip: padding-box;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
    }

    .ant-modal-body {
      color: #fff;
      height: 90%;
    }
    .ant-descriptions-title,
    .ant-descriptions-item-label,
    .ant-descriptions-item-content
    {
      color: #fff;
    }
  }
`;
