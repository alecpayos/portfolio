// MISC ICONS

import googleIcon from './misc/google-icon.svg';
import googleMapsIcon from './misc/google-maps.svg';
import icons8PhoneIcon from './misc/icons8-phone.svg';
import linkedinIcon from './misc/linkedin-icon.svg';
import chainLinkIcon from './misc/chain-link-icon.svg';
import chevronLeftDouble from './misc/chevron-left-double.svg';
import chevronRightDouble from './misc/chevron-right-double.svg';

// TECHNOLOGY ICONS
import antDesignIcon from './tech-stack-icons/ant-design.svg';
import appleIcon from './tech-stack-icons/apple.svg';
import awsApiGatewayIcon from './tech-stack-icons/aws-api-gateway.svg';
import awsCloudformationIcon from './tech-stack-icons/aws-cloudformation.svg';
import awsCloudfrontIcon from './tech-stack-icons/aws-cloudfront.svg';
import awsCloudwatchIcon from './tech-stack-icons/aws-cloudwatch.svg';
import awsEc2Icon from './tech-stack-icons/aws-ec2.svg';
import awsIamIcon from './tech-stack-icons/aws-iam.svg';
import awsRdsIcon from './tech-stack-icons/aws-rds.svg';
import awsS3Icon from './tech-stack-icons/aws-s3.svg';
import awsIcon from './tech-stack-icons/aws.svg';
import bitbucketIcon from './tech-stack-icons/bitbucket.svg';
import bootstrapIcon from './tech-stack-icons/bootstrap.svg';
import cssIcon from './tech-stack-icons/css-3.svg';
import figmaIcon from './tech-stack-icons/figma.svg';
import flaskIcon from './tech-stack-icons/flask.svg';
import gitIcon from './tech-stack-icons/git-icon.svg';
import githubIcon from './tech-stack-icons/github-icon.svg';
import gitlabIcon from './tech-stack-icons/gitlab.svg';
import htmlIcon from './tech-stack-icons/html-5.svg';
import laravelIcon from './tech-stack-icons/laravel.svg';
import materialUiIcon from './tech-stack-icons/material-ui.svg';
import microsoftWindowsIcon from './tech-stack-icons/microsoft-windows-icon.svg';
import mysqlIcon from './tech-stack-icons/mysql-icon.svg';
import nextjsIcon from './tech-stack-icons/nextjs-icon.svg';
import nginxIcon from './tech-stack-icons/nginx.svg';
import phpIcon from './tech-stack-icons/php.svg';
import postgresqlIcon from './tech-stack-icons/postgresql.svg';
import pythonIcon from './tech-stack-icons/python.svg';
import reactIcon from './tech-stack-icons/react.svg';
import slackIcon from './tech-stack-icons/slack-icon.svg';
import trelloIcon from './tech-stack-icons/trello.svg';
import typescriptIcon from './tech-stack-icons/typescript-icon.svg';
import ubuntuIcon from './tech-stack-icons/ubuntu.svg';
import vueIcon from './tech-stack-icons/vue.svg';
import modpackIcons from './hobbies/minecraft-modpacks';

// DEFINITIONS

const misc = {
  googleIcon: { icon: googleIcon, alt: "Google Email Icon" },
  googleMapsIcon: { icon: googleMapsIcon, alt: "Google Maps Icon" },
  icons8PhoneIcon: { icon: icons8PhoneIcon, alt: "Contact Phone Icon" },
  linkedinIcon: { icon: linkedinIcon, alt: "LinkedIn Icon" },
  chainLinkIcon: { icon: chainLinkIcon, alt: "Chain Link Icon" },
  chevronLeftDouble: { icon: chevronLeftDouble, alt: "Chevron Left Double Icon" },
  chevronRightDouble: { icon: chevronRightDouble, alt: "Chevron Right Double Icon" },
}

// TECH IMAGE AND ICON GROUPINGS
const languageAndFrameworksIcons = {
  htmlIcon: { icon: htmlIcon, alt: "HTML 5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  nextjsIcon: { icon: nextjsIcon, alt: "NextJS 14", link: "https://nextjs.org/" },
  nginxIcon: { icon: nginxIcon, alt: "NGINX", link: "https://www.nginx.com/" },
  reactIcon: { icon: reactIcon, alt: "ReactJS", link: "https://react.dev/" },
  vueIcon: { icon: vueIcon, alt: "VueJS", link: "https://vuejs.org/" },

  flaskIcon: { icon: flaskIcon, alt: "Flask", link: "https://flask.palletsprojects.com/en/3.0.x/" },
  laravelIcon: { icon: laravelIcon, alt: "Laravel 10", link: "https://laravel.com/" },
  phpIcon: { icon: phpIcon, alt: "PHP", link: "https://www.php.net/" },
  pythonIcon: { icon: pythonIcon, alt: "Python", link: "https://www.python.org/" },
  typescriptIcon: { icon: typescriptIcon, alt: "TypeScript", link: "https://www.typescriptlang.org/" },
}

const awsIcons = {
  awsCloudfrontIcon: { icon: awsCloudfrontIcon, alt: "AWS CloudFront", link: "https://aws.amazon.com/cloudfront/" },
  awsEc2Icon: { icon: awsEc2Icon, alt: "AWS EC2", link: "https://aws.amazon.com/pm/ec2/" },
  awsIamIcon: { icon: awsIamIcon, alt: "AWS IAM", link: "https://aws.amazon.com/iam/" },
  awsRdsIcon: { icon: awsRdsIcon, alt: "AWS RDS", link: "https://aws.amazon.com/free/database/" },
  awsS3Icon: { icon: awsS3Icon, alt: "AWS S3", link: "https://aws.amazon.com/pm/serv-s3/" },
  awsApiGatewayIcon: { icon: awsApiGatewayIcon, alt: "AWS API Gateway", link: "https://aws.amazon.com/api-gateway/" },
  awsCloudformationIcon: { icon: awsCloudformationIcon, alt: "AWS Cloud Formation", link: "https://aws.amazon.com/cloudformation/" },
  awsCloudwatchIcon: { icon: awsCloudwatchIcon, alt: "AWS CloudWatch", link: "https://aws.amazon.com/cloudwatch/" },
  awsIcon: { icon: awsIcon, alt: "AWS", link: "https://aws.amazon.com/free/" },
}

const versionControlIcons = {
  bitbucketIcon: { icon: bitbucketIcon, alt: "Bitbucket", link: "https://bitbucket.org/product" },
  gitIcon: { icon: gitIcon, alt: "Git CLI", link: "https://git-scm.com/" },
  githubIcon: { icon: githubIcon, alt: "Github", link: "https://github.com/" },
  gitlabIcon: { icon: gitlabIcon, alt: "Gitlab", link: "https://about.gitlab.com/" },
}

const designFrameworksIcons = {
  antDesignIcon: { icon: antDesignIcon, alt: "Ant Design", link: "https://ant.design/" },
  bootstrapIcon: { icon: bootstrapIcon, alt: "Bootstrap 5", link: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" },
  cssIcon: { icon: cssIcon, alt: "CSS 3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  materialUiIcon: { icon: materialUiIcon, alt: "MaterialUI", link: "https://mui.com/" },
}

const databaseIcons = {
  mysqlIcon: { icon: mysqlIcon, alt: "MySQL", link: "https://www.mysql.com/" },
  postgresqlIcon: { icon: postgresqlIcon, alt: "PostgreSQL", link: "https://www.postgresql.org/" },
}

const projectManagementIcons = {
  figmaIcon: { icon: figmaIcon, alt: "Figma", link: "https://www.figma.com/" },
  slackIcon: { icon: slackIcon, alt: "Slack", link: "https://slack.com/" },
  trelloIcon: { icon: trelloIcon, alt: "Trello", link: "https://trello.com/" },
}

const operatingSystemIcons = {
  appleIcon: { icon: appleIcon, alt: "MacOS Icon", link: "https://www.apple.com/ph/macos/sonoma/" },
  microsoftWindowsIcon: { icon: microsoftWindowsIcon, alt: "Windows", link: "https://www.microsoft.com/en-ph/windows?r=1" },
  ubuntuIcon: { icon: ubuntuIcon, alt: "Ubuntu", link: "https://ubuntu.com/" },
}

// MASTER OBJECT
const Icons = {
  misc,
  languageAndFrameworksIcons,
  awsIcons,
  versionControlIcons,
  designFrameworksIcons,
  databaseIcons,
  projectManagementIcons,
  operatingSystemIcons,
}

export default Icons