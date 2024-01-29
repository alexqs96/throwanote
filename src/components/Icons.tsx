export const GithubLogo = ({size, ...className}:{size: number, className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...className}>
    <title>Github</title>
    <path
      className="fill-black dark:fill-white duration-200"
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    />
  </svg>
)

export const LinkedinLogo = ({size, ...className}:{size: number, className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...className}>
    <title>Linkedin</title>
    <path
      className="fill-black dark:fill-white duration-200"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    />
  </svg>
)

export const SearchIcon = ({size, ...className}:{size: number, className: string}) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 388.92 388.93"
      {...className}
  >
      <path
          fill="#000"
          d="M357,305.46c-5.89-6.13-9.73-16.32-16-23.09-12.6-13.65-23.49-17.19-24.86-28.41-12.37-1.68-11.66-15-28.42-21.31-1.08-23.9-15.74-20.2-27.81-18.15a4.83,4.83,0,0,0,2.94-3.17c-12.62.46-4.62,11.56-17.75,12.43-1.92-4-6.67-5.17-8.88-8.87,2.45-7.76,13.08-23.54,19.54-37.3,3.51-7.56-1.87-21,3.55-26.64.27,2.1-.31,5,1.78,5.33C272.18,73.55,222.09,10.64,143.86,0H124.32C60,6.32,6,53.18,0,124.32v7.11c2.43,39.6,18.82,65.23,37.29,88.79,27.23,21.89,68.31,43.37,115.43,35.52,24.62-4.1,43-17.17,62.16-26.64,9,2.89,12.78,10.9,17.76,17.75-26.41,13.57-9.71,31.92,5.33,46.18,24.59,23.31,63.7,66.4,87,87,6.21,5.49,9.84,8.26,17.75,8.88,6.37-13.2,46.78-32.77,46.17-49.73-.39-11.49-22.25-23.64-32-33.73ZM49.72,207.78c-9-16.08-14-26.84-21.31-42.62-1.3-7.77,3.53,1.43,3.55-3.55-5-.77-4.22-12-8.88-17.76,2.1-2.63,1.54-7.93,7.11-7.1-.2-4.54-3.26-6.22-5.33-8.88,3.49,1.18,5.18-9.65,0-12.43,12.6-8.32,5.07-27.76,17.76-33.74-3.54-4.43,3.8-8.72,0-14.21A8.42,8.42,0,0,0,48,69.27c22.23-33,62-47,104.78-44.4C163,29.47,177.27,38.68,190,39.08c4,9.21,19.69,21.58,30.19,30.19,3.54,12,14.13,31.91,19.54,48-4.82,11.11,7.32,21-1.77,30.19-5,87.75-130,125.24-188.25,60.37ZM341,371.17c-12.07-6.86-16.36-21.63-23.08-30.19-19.37-24.66-43.88-46.29-74.59-72.81,9.07-10.3,14.59-19.38,24.86-24.85,27.12,20,51.31,49.39,79.92,76.35,7.26,6.86,22.94,16.11,23.08,19.55.45,10.44-28.85,21.66-30.19,31.95Z"
      />
      <path
          fill="#000"
          d="M104.78,62.16c1,0,2-1.43,0-1.78-11.65,8.09-31.88,15-30.19,30.19,2.14,19.29,27.94,11.32,37.3-3.55,16.24-4.71,43.09-3.91,60.38,10.66,2.17-2.57,6.78-2.7,8.88-5.33-5.24-31-58-28.12-76.37-30.19Z"
      />
  </svg>
)

export const KeyLogo = ({size, ...className}:{size: number, className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532 212.8" width={size} height={size} {...className}>
      <path
        d="M507.36,152.88H495.6V131.6h11.76a24.64,24.64,0,0,0,0-49.28H210C198.8,35.28,156.8,0,106.4,0a106.4,106.4,0,0,0,0,212.8c50.4,0,92.4-35.28,103.6-82.32H429.52v21.28H417.76a24.64,24.64,0,1,0,0,49.28h89.6A24.86,24.86,0,0,0,532,176.4c0-12.88-11.2-23.51-24.64-23.51Zm-401,11.76A57.68,57.68,0,1,1,164.08,107,57.59,57.59,0,0,1,106.4,164.64Z"
      />
  </svg>
)

export const UrlLogo = ({size, ...className}:{size: number, className?: string}) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 507.5 525"
      {...className}
  >
      <path d="M122.5,5.07,5.07,122.5H122.5Z" />
      <path d="M140,385V192.5a26.32,26.32,0,0,1,26.25-26.25H402.5V8.75A8.78,8.78,0,0,0,393.75,0H140V131.25a8.78,8.78,0,0,1-8.75,8.75H0V516.25A8.78,8.78,0,0,0,8.75,525h385a8.78,8.78,0,0,0,8.75-8.75v-105H166.25A26.32,26.32,0,0,1,140,385Z" />
      <path d="M319.37,253.75h35v35h-35Z" />
      <path d="M498.75,183.75H166.25a8.78,8.78,0,0,0-8.75,8.75V385a8.78,8.78,0,0,0,8.75,8.75h332.5A8.78,8.78,0,0,0,507.5,385V192.5A8.78,8.78,0,0,0,498.75,183.75Zm-214.38,140a17.55,17.55,0,0,1-17.5,17.5h-35a17.55,17.55,0,0,1-17.5-17.5V245a8.75,8.75,0,0,1,17.5,0v78.75h35V245a8.75,8.75,0,0,1,17.5,0Zm87.5-35a17.55,17.55,0,0,1-17.5,17.5H339.5l28.43,19a8.74,8.74,0,0,1-4.81,16,8.2,8.2,0,0,1-4.81-1.49l-38.94-25.9V332.5a8.75,8.75,0,0,1-17.5,0V245a8.78,8.78,0,0,1,8.75-8.75h43.75a17.55,17.55,0,0,1,17.5,17.5Zm70,52.5H398.12a8.78,8.78,0,0,1-8.75-8.75V245a8.75,8.75,0,0,1,17.5,0v78.75h35a8.75,8.75,0,0,1,0,17.5Z" />
      <path d="M420,462l60.9-50.75H420Z" />
  </svg>
)

export const BookLogo = ({size, ...className}:{size: number, className?: string}) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...className}
  >
      <path d="M12 4.706c-2.938-1.83-7.416-2.566-12-2.706v17.714c3.937.12 7.795.681 10.667 1.995.846.388 1.817.388 2.667 0 2.872-1.314 6.729-1.875 10.666-1.995v-17.714c-4.584.14-9.062.876-12 2.706zm-10 13.104v-13.704c5.157.389 7.527 1.463 9 2.334v13.168c-1.525-.546-4.716-1.504-9-1.798zm20 0c-4.283.293-7.475 1.252-9 1.799v-13.171c1.453-.861 3.83-1.942 9-2.332v13.704zm-2-10.214c-2.086.312-4.451 1.023-6 1.672v-1.064c1.668-.622 3.881-1.315 6-1.626v1.018zm0 3.055c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0 6.093c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm-16-6.104c2.119.311 4.332 1.004 6 1.626v1.064c-1.549-.649-3.914-1.361-6-1.672v-1.018zm0 5.09c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.316-6-1.626v1.017zm0 6.093c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017z" />
  </svg>
)
