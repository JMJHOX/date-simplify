
<div id="top"></div>

<!--[![Stargazers][stars-shield]][stars-url]-->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Npm package version](https://badgen.net/npm/v/@jmjhox/date-simplify)](https://www.npmjs.com/package/@jmjhox/date-simplify)
[![Npm package monthly downloads](https://badgen.net/npm/dm/@jmjhox/date-simplify)](https://npmjs.com/package/@jmjhox/date-simplify)
[![Npm package dependents](https://badgen.net/npm/dependents/@jmjhox/date-simplify)](https://npmjs.com/package/@jmjhox/date-simplify)




<!-- PROJECT LOGO -->
<br />
<div align="center">


  <h1 align="center">Date Simplify!</h1>

  <p align="center">
 Toolbox that simplifies your time developing code on dates & time within your Javascript & Typescript App!
    <br />
    <a href="https://github.com/JMJHOX/date-simplify"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

There are many great libraries to calculate time & dates and often they offer you a set of tools that lets you build your code, but sometimes your are struggling to find that specific function that do what you wants to do in your code  while you trying to write the less code possible or not to spend too much time on it. Keep it simple!

That´s WHY you should start using  Date-Simplify instead! or at least give it a try

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [date-fns](https://date-fns.org/)





<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install @jmjhox/date-simplify
  ```
* Javascript/Typescript project to integrate our library

### Installation

_We only have to import "DateSimplify" into our proyect like a dependency_:
```
import { dateSimplify } from '@jmjhox/date-simplify'
```

_Below it is a example of how you import it to your component.ts using Angular 13_:
```
import { Component, OnInit } from '@angular/core';
import { dateSimplify } from '@jmjhox/date-simplify'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(){}
  ngOnInit(): void
  {
     dateSimplify.dateFormat('12/12/1998')
  }
}
```



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.
# getDateRangeLimitUTC
Is a method used to get the age limit of the user based on the actual date of the year or a custom date you want to use it from reference using UTC
## How to use it
It has two parameters: 
```
public getRangeLimit(dateRange: number, ChangeDate?: string)

dateRange: number(the number you want to limit)
ChangeDate?: string (the date you migh want to use from reference, the format is dd/mm/yyyy)
```

# getDateRangeLimitLocal
Is a method used to get the age limit of the user based on the actual date of the year or a custom date you want to use it from reference using your local time
## How to use it
It has two parameters: 
```
public getRangeLimit(dateRange: number, ChangeDate?: string)

dateRange: number(the number you want to limit)
ChangeDate?: string (the date you migh want to use from reference, the format is dd/mm/yyyy)
```

# dateFormat
Is a function that formats any date to yyyy/mm/dd , if for some reasons, the date is impossible to get, it returns the same date introduced.
## How to use it
```
dateSimplify.dateFormat('12121998')
```
It should Return 12/12/1998 on string format

# dateFormatISO
Is a function that formats any date to yyyy/mm/dd ISO FORMAT , if for some reasons, the date is impossible to get, it returns the same date introduced.
## How to use it
```
dateSimplify.dateFormat('12101998')
```
It should Return 1998-10-12T00:00:00.000Z on string format

# dateIsValid
method to check if a date is valid or not. it only returns false or true.
## How to use it
```
dateSimplify.dateIsValid('12','12','1998')
```
It should Return 12/12/1998 on string format


# dateIsValidFix
Checks if the date is valid, and attempts to fix the date automatically for yourself

```
Format:
dateSimplify.dateIsValidFix(day: string, month: string, year: string)
```

## How to use it
```
dateSimplify.dateIsValidFix('12','12','1998')
```

It should Return 12/12/1998 on string format



_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/JMJHOX/date-simplify/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Date-Simplify is distributed under the [MIT License](https://opensource.org/licenses/MIT).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

JMJHOX  - josemiguelaparicio507@gmail.com

Project Link: [https://github.com/JMJHOX/date-simplify](https://github.com/JMJHOX/date-simplify)

<p align="right">(<a href="#top">back to top</a>)</p>

<!--

 ACKNOWLEDGMENTS 
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>
-->


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[stars-shield]: https://img.shields.io/github/stars/jmjhox/date-simplify.svg?style=for-the-badge
[stars-url]: https://github.com/JMJHOX/date-simplify/stargazers
[issues-shield]: https://img.shields.io/github/issues/jmjhox/date-simplify.svg?style=for-the-badg
[issues-url]: https://github.com/JMJHOX/date-simplify/issues
[license-shield]: https://img.shields.io/github/license/jmjhox/date-simplify.svg?style=for-the-badg
[license-url]: https://opensource.org/licenses/MIT



## Code of Conduct

In order to ensure that the Date-simplify community is welcoming to all, please review and abide by the [Code of Conduct](https://github.com/JMJHOX/date-simplify/blob/development/docs/CODE_OF_CONDUCT.md).

## Security Vulnerabilities

If you discover a security vulnerability within Date-simplify, please send an e-mail to Jose Aparicio via [josemiguelaparicio507@gmail.com](mailto:josemiguelaparicio507@gmail.com). All security vulnerabilities will be promptly addressed.
