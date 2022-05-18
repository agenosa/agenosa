const code = {
  vue: {
    sample1: `
    <c-box text-align="center">
          <c-button mb="4" variant-color="green" @click="show = !show">
            Click to add a new Artist
          </c-button>
          <c-collapse :is-open="show">
            <c-box bg="white" w="100%" p="4" color="white">
    
              <c-input
                color="black"
                variant="filled"
                v-model="artist.name"
                placeholder="Type in an artist name.."/>
            
              <c-input
                color="black"
                variant="filled"
                v-model="artist.url"
                placeholder="Type in an image URL.."/>
              
              <c-textarea
                color="black"
                v-model="artist.about"
                placeholder="Write a description about the artist"/>
              
              <c-button
                width="260px"
                variant-color="green"
                v-on:click="storeArtist();
                show = false;">Add New Artist</c-button>
              <!--if hidden-->
            </c-box>
          </c-collapse>
        </c-box>
    `.trim(),
    sample2: `export default {
      name: "Artist App",
      components: {
        CBox,
        CButton,
        CFlex,
        CSimpleGrid,
        CTextarea,
        CText,
        CInput,
        CCollapse
      },
      data() {
        return {
          search: "",
          show: false,
          artist: { name: "", about: "", url: "" },
          artists: [...
          ]
        };
      },
      methods: {
        storeArtist() {
          this.artists.push({
            name: this.artist.name,
            about: this.artist.about,
            url: this.artist.url
          });
        },
        removeArtist(id) {
          console.log(id);
          this.artists.splice(id, 1);
        }
      },
      computed: {
        filteredArtists() {
          return this.artists.filter(artist => {
            return artist.name.toLowerCase().includes(this.search.toLowerCase());
          });
        }
      }
    };`.trim(),
  },
  csharp: {
    sample1: `
    public void DisplayEmployees()
        {
            EmployeeDetailEntities db = new EmployeeDetailEntities();

            Console.Clear();

            var queryA = (from d in db.Departments
                          from e in db.Employees
                          where e.departmentID == d.departmentID
                          select new
                          {
                              ORGANIZATION = d.organizationName
                          }).Distinct();

            var queryB = from e in db.Employees
                         from d in db.Departments
                         where e.departmentID == d.departmentID
                         orderby e.lastName
                         select new
                         {
                             ORGANIZATION = d.organizationName,
                             FIRSTNAME = e.firstName,
                             LASTNAME = e.lastName
                         };

            Console.Write("ALL EMPLOYEES");

            foreach (var item in queryA)
            {
                Console.WriteLine(item.ORGANIZATION);

                foreach (var row in queryB)
                {
                    if (item.ORGANIZATION == row.ORGANIZATION)
                    {
                        Console.WriteLine("{0}{1} {2}", spacer.PadLeft(5), row.FIRSTNAME, row.LASTNAME);
                    }
                }
            }
            Console.Write("Press ENTER to continue");
        }
`.trim(),
    sample2:
      `public void SaveEmployee(string firstName, string lastName, List<string> listCertificates, string orgInput)
    {
        EmployeeDetailEntities db = new EmployeeDetailEntities();
        Menu m = new Menu();

        Employee emp = new Employee();
        emp.firstName = firstName;
        emp.lastName = lastName;

        Department department = (from d in db.Departments
                                 where d.Organization.organizationName == orgInput
                                 select d).FirstOrDefault();
        // Adding employee department 
        department.Employees.Add(emp);

        var certQuery = (from c in db.Certifications
                         from lc in listCertificates
                         where c.certificate == lc
                         select new
                         {
                             CERTIFICATES = lc
                         }).Distinct();

        foreach (var item in certQuery)
        {   //Adding certificate selection to Employee
            Certification cert = (from c in db.Certifications
                                  where c.certificate.Equals(item.CERTIFICATES)
                                  select c).FirstOrDefault();
            cert.Employees.Add(emp);
        }
        // Saving to db and returning back to main menu
        db.SaveChanges();
        m.MainMenu();
    }`.trim(),
  },
  angular: {
    sample1: `
    getMovies(pageNumber:number, selectedGenre:string) {
      let movies = ''
      this.filterMoviesArr = []
      this.pageNumber = pageNumber

      if (this.selectedGenre == ''){ 
          this.welcomeMsg = "Welcome!"
          this.totalPages = 0
      } else {
          this.welcomeMsg = ''
          this.modifyURL = 
          'http://api.themoviedb.org/3/discover/movie?api_key='
          + API_KEY
          +\`&primary_release_date.gte=$\{this.startDate}\`
          +\`&primary_release_date.lte=$\{this.endDate}\`
          +\`&page=$\{this.pageNumber}\`
          +\`&with_genres=$\{this.selectedGenre}\`
          this._http.get<any>(this.modifyURL)
      .subscribe(data => {
          this.pageNumber         = data.page;
          this.totalPages     = data.total_pages;
          this._movieArray  = data.results;  
     
          for (let title of this._movieArray) {  
              movies += title;
              if(title.genre_ids.includes(selectedGenre)){  // Checking if genre ID's match with movie's genre ids
                  // if successfull, pushing filtered movies to an array with selected genre
                  this.filterMoviesArr.push(title)                
                  }
              }
          }, 
            error =>{
              // Let user know about the error.
              alert(error);
              console.error(error)
            }) 
      }
  }
`.trim(),
    sample2: `<body>
    <br /><br />
    <h1>{{ welcomeMsg }}</h1>
    <div class="list">
        <p>Select a genre:</p>
        <form formGroup="formGroup">
            <select [(ngModel)]="selectedGenre" class="genre-list" (change)="getMovies(pageNumber, selectedGenre)">
                <option *ngFor="let selectedGenre of _genreArray" [ngValue]="selectedGenre.id">
                    {{ selectedGenre.name }}
                </option>
            </select>
        </form>
        <br />
        <ul>
            <div class="grid-container">
                <li *ngFor="let movie of filterMoviesArr">
                    <image-component [image]="movie.poster_path"></image-component>
                    <h1>
                        <b>{{ movie.title }}</b>
                    </h1>
                    {{ movie.overview }}
                    <br /><br /><br /><br />
                </li>
            </div>
        </ul>
        <body>        
                <ng-container *ngFor="let item of [].constructor(totalPages); let page = index">
                    <button class="myButton" (click)="changePage(page)">
                        {{ page + 1 }}
                    </button>
                </ng-container> 
        </body>
    </div>
</body>`.trim(),
  },
  react: {
    sample1:`
    const StyledNavbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <Nav>
          <StyledLogo to="/">
            <div logo className="logo">
              <span>A&nbsp;&nbsp;&nbsp;G</span>
            </div>
          </StyledLogo>
          <>
            <StyledHamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </StyledHamburger>
          </>
          <StyledMenu isOpen={isOpen}>
            <StyledLink to="/" onClick={() => setIsOpen(!isOpen)}>
              Home
            </StyledLink>
            <StyledLink
              className="link"
              to="/about"
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </StyledLink>
            <StyledLink
              className="link"
              to="/projects"
              onClick={() => setIsOpen(!isOpen)}
            >
              Projects
            </StyledLink>
            <StyledLink
              className="link"
              to="/contact"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </StyledLink>
          </StyledMenu>
        </Nav>
      );
    };
    `.trim(),
    sample2:`export const StyledSection = styled.div\`
    padding: 32px;
    display: \${(props) => toggle(props.projects, "grid", "flex")};
    padding: \${(props) => toggle(props.projects, "0", "150px 75px")};
    align-items: \${(props) => toggle(props.contact, "center", "none")};
    flex-direction: \${(props) => toggle(props.contact, "column", "none")};
    justify-content: \${(props) => toggle(props.contact, "space-evenly", "center")};
  
    .contact_icons {
      transform: scale(2.5);
    }
  
    .vancouver-map {
      border-radius: 20px;
      max-width: 920px;
      width: 100%;
    }
  `.trim(),
  }
};

export default code;
