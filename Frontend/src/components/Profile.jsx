import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Avatar } from './ui/avatar'; // Assuming this is a wrapper for Radix Avatar or another implementation
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';

const skills = ["html", "css", "js", "ts", "android"]

const Profile = (props) => {
    const isHaveResume = true;
    const [open,setOpen] = useState(false);
        return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage
                                src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhURExIWFRMVGBYVFxUVFxUVFxYVGBUWFxcXFhcYIDQsGBslGxUWIjEhJSorLi4uGR8zODMtNygtLisBCgoKDg0OGxAQGDAmICUtLS83LTUtLTcrLS0tLS8tMC01LTYtMSsyLSs1LS0vLTctLy0tLS0tLS8tLS0tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAACAQUGBwj/xABAEAABAgIFCgUCBQMEAgMBAAABAAIDEQQhMUFRBRITMmFxgaGxwQYUIpHwB+FCUmLR8SOCokNTcpJjslTC0jP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAQIG/8QAMhEBAAIBAgMFBQcFAAAAAAAAAAECAwQRBSExEhMyQVEigZGh4RVCYXGx0fAUM1Jjwf/aAAwDAQACEQMRAD8A9iWWWjeOqmYcD7FZa0zFRtF21A6h0jVPDqFbSNxHuEOM8ESBmaqhXegWRaNrcO4Q8w4H2KJAqNdVV9WCBpL0q7j2RtI3Ee4QKQZylXbZXggCmaLYd/YJfNOB9ij0dwAM6q76rggOk4+sflwTWkbiPcJaKJkkVjZXcEA07CsG4dEnmHA+xTUN4kKxYEBFrwndI3Ee4SgYcD7FBGWjeOqeSTWmYqNou2pvSNxHuEFaRqnh1CUTMZ4IkDM1VCu9L5hwPsUBKNrcO4TSVgVGuqq+rBMaRuI9wgDSruPZARqQZylXbZXghZpwPsUDFFsO/sEZAo7gAZ1V31XBF0jcR7hArH1j8uCoiRRMkisbK7gqZhwPsUGFFnMOB9isoHVWLqnceirp248iqvitIIBrNV6BZXgaw+XFTQuw6LLGFpBIkB/CBtBpVg39iraduPIocVwdU2s24dd6ACPRb+HdD0LsOivCObPOqnZf03oGUrSdbh3KNp248igxBnGbaxZh13oBJuj6o49Sl9C7Doiw4gaJGohAdIvtO89U1p248igGG41gVGu5AIrYJMwXYcwj6duPIoLxdU7j0SSZfFaQQDWar0HQuw6IJA1h8uKcSjGFpBIkB/CPp248igrSrBv7FLI8VwdU2s24dd6HoXYdEBKLfw7phLQjmzzqp2X9N6Lp248igDSdbh3KEixBnGbaxZh13quhdh0QMUfVHHqURAhxA0SNRCvp248igIoh6duPIrCBVZZaN46onl3bOamhIrqqr9kDSHSNU8OoVfMjA8lV8TO9IFZx9+yACLRtbh3Cnl3bOay1pYZndV82IGUvSruPZW8yMDyVH+uy7Hb/AAgCmaLYd/YIfl3bOasx2ZUd9XzYgYScfWPy4I3mRgeSGYZd6hYcfbsgEnYWqNw6Jfy7tnNXbHAEpGqq65Ada8JnzIwPL91QUd2zmgGy0bx1TyV0JFdVVfsieZGB5ILUjVPDqEojviZ3pArOPv2VfLu2c0Eo2tw7hNJZrSwzO6r5sV/MjA8kFaVdx7ICM/12XY7f4WPLu2c0BKLYd/YIyXY7MqO+r5sVvMjA8kAY+sflwVEUwy71Cw4+3ZTy7tnNAJRF8u7ZzUQNKsXVO49EHzOzn9lgx51StqtxqQBV4GsPlxRPLbeX3WDDzfVOcrrLau6BlBpVg39iq+Z2c/ssZ2fVZfj8tQBR6Lfw7qeW28vusam2fCz+UDKUpjgDMkAStNQvSeUsuNhemWdENjQbP+VVW61LUXJ0aOdJHdLBgu/bqgKae0mTAXHkmoAjOFzR90aHQg0SbIDYPurCLm+mU5X2W190FmQDe6aoYtdlkwreZ2c/ssCBOudtdmNaAUR01WI+Mz9Q9/umDRtvL7rHmdnP7IExldpBDhm2iYrH2RWOBEwQRiKwsUmCyJUWyJqzga/utNTaLGoxz2mbbyBV/e3ug30DWHy4pxaPJWVWRDLViD8B/FiWm/GX8raeZ2c/sgtSrBv7FLI2dn1WX4/LVny23l90Eot/DumEtqbZ8LP5WfM7Of2QVpOtw7lCRs3Prsux+WrPltvL7oCUfVHHqURLCJm+mU5X2W191nzOzn9kDCiX8zs5/ZRABZZaN46pjywxPJYdBAE5mqv2QHQ6Rqnh1CD5h2zmtB4x8YQcnwhEjNiOzqmthsNZmLYh9LLbzM3ArsRMztDkzs3Ss2K1k3PcGtA1nENF15Xg+W/qrlCPNsHMozLswZ8SW2I6r2aFxtNpcWMc6NFfFdbOK9zzwzjUrVNHaes7ILaisdH0jlD6gZJgzD6ZDJFUoedFPtDBXP036tZN/AI8SX5YebP/ALkLw+FR3GxpI2CpGbR3C0SU8aTHHWVe2snyepO+qlFDs6Hk92dOec50Jjpm0za018URn1bifhobRXfGJq4MtXlrXAIzKcwfhPJeow4IQW1WWekvWoH1WJ1qGf7YoPVq2ED6hUZ5m6FGZPYxw5O7Lx2FleEPwv8A8f3WxomXaN+IvbvbP/1JScOnlHOr1EdP0e0UTxJQ4mrGAOD2uZzcJc10FHiNLQQQRIVgzHuF47kemUaKQ2HGY535Zyd/1dIldbQYJhVglu6pQ30tfuyj+2b452yU/wCO6WvC0TPFJYZPGc3Eaw4X8lvcnxoMZufDfnNsqtBwIlUVVvitTq1dNrcWoj2J5+nmsy0bx1TrhOpBdBAE5mqv2VPMO2c1GtOZ8R5FML+tCmGisgWsM7W7OnRjIGWdN/TfVFAnseBeNuI4rfCIXekykbfhXCeJsmuosUPhkhpOdDcLWuFreHRB3dG1uHcJpaTIWVGx4QitqeDmPbc10pmWw1Eb1sfMO2c0FqVdx7ICMz123Ybf4V/LDE8kEoth39gjJZziwyG+v5sWPMO2c0FY+sflwVEdkPO9RNZw9uyt5YYnkgWUTPlhieSiAyrF1TuPRK6Z2PRZERxqJqNVyAay1gd6SAWmYIImCJG0G1NaBuHMqkSGGiYqIQcblP6V5LivMRsIwybWw3ObDJxLBZwkuayz4QNEBcyjNDB+OG3O/wCxNY4r1LTOx6JPK2UdDBiRTXmNJaDVN5kGiY2lT01F68uqnqdFXN5zE/zyeF0x09q1EZe1N8P0LKkHTmCYEUktL4ZtItMrHDeJrhPEn07p1Hm6G3zEOszhg6QDbDtP9s1PGatmbOhyYvxhydDyHS44z4NGixWzLc5jC5sxaJ8QmHeC8qf/AAo3/Ufut19OPFBoNKMKIS2BGOZEBq0cQVNeQbK/S7YZ/hXu0NmdW6szl8kob5JrK7gwUvXffm+bH+DMqATNCj8GT5ApGlZFpcL/APpRo7JVzdCiAe8l9S6BuHMoERxBIBq9+q899KadJX1fJ5kcDzW9yN4rpdHk0PMSF/txDMAfpda3psXvOXPDVCpgIpEBjz+cDMiDaHtkey8N8deFX5Ojhky+FEBfCiEVkTra79TZjfMFSUybyr59LtXnzh0sLLkOOzPYTtaZZzTgf3QqB4gi0WKIsI1/iadV7fyu/e5cJQaUYbw4GqxwxC2tJpCsdrtRtLJ7jurxNH0XkfK0KlUdseEfS8Go2tcJhzTtBmFdeXfRfKjtJHopJzXNEZowIcGP3TDmey9c0DcOZWfevZts+kwZO8pFi8DWHy4oeXMnCkQXQryJtODxYe24lMxIYaJiohC0rsei8pXnHhfKJgUgNdMNiHRvB/C6cmneHTG4leiLics+G4samubDEmRAIjnkHNZOp290wSBtXfw6OAADMkAAk1EmVpkgrRb+HdMJaKM2WbVO2/rvVNM7HogtSdbh3KEjwmh1bqzZh03omgbhzKCUfVHHqURKPcWkgGQH8rGmdj0QOKJPTOx6KIKLLLRvHVOaNuA9gqxGCRqFhQEQ6Rqnh1CVzzifcq8IzIBrGBruQDXM+Po8qOxn54gn/wAWtJ/9i1dno24D2C4P6mOk6A0fliGXFgHdB0vhCj5lDgjFued7yX//AGWxpV3HskMmEiDCAJlo4d/6AnqOJznXZbXig0OXvDFDpg/rwQXWCI30RB/eKzuMwtn4doLoEBsF0UxQz0te8SeWADNDyNZwFU6pyFSq6MH0nQt1YbREiSvLpiGzkXHc3FORqjVVVdViuRffeCaRWdzSTj6x+XBVzzifcpiC0ETIma6zXeuhZed/XV7PKUYGWfpptxzRCdncJlvuF6DlvKlGokIx472sY3EVk3NaBW4nAL538Z+JYmUaSYpaWw2gshQ/ysnOZ/UaidwF1cmOszKvqLxWkw59rZ1Yp9xmhQoUt62eRcj0ilxRBgML3m02NYPzPdcOZumrccurItvedodj9GKG51LiRvww4eYf+UR7ZD2Y7kvbFoPCvhyHQKKILfU6t74kgC+IRrbAKgMAAtjnnE+5VPJbtW3bODH3dIrJqkap4dQlFeEZkA1jbXcUzmNwHsvCYCjGvh+y1fiDxdQ6E9jIzyHPrk1peWt/M4NsC0/jbxrCogMKDJ9JwGrDmLXkWn9PvJeOUykPivdEiOL3vM3OdWSf2uAuCp59VFOVectbQ8MnN7eTlX5y+hKLlej0kB0CMyIBbmuBI3i0WG1GXzcxxa7OaS1wsc0lrhuIrC6bI3j/ACjBLWFwpAJADYoz3kmoBrxXMmVs1zHrInxQmz8FvXnjtv8Am90oth39gjLWUSLFdDY6IzRRHNBdDa7ODXGcxMATRc84n3KusSY2nZaPrH5cFRMwWgiZEzXWa70TRtwHsEcJKJ3RtwHsFhBdUi6p3HokpKzBWN46oKzRIB9Q+XFOIdI1Tw6hARcD9TGeuAcWxBzZLqV10lzHj+BODDeBqxJHYHNPdo90G7yNGzqPBdjDZyaAei2VGcBnHCXdaXwDSc6ihl8Nzm8Cc8cnS4J/xLFLKPGeLWwYzhLEQyQkuxG87NR4FpGl00YmZjO0o/4OLtGODAwcFvMpUuFDM4kRjBL8bmtvOJXB+DqeIUGju/AYMNrpbGAT4EdV6HRC1zZiRBrBFYIkFm8M1NctJifFEzv8VziGG2PJvHT9uTmKb42ydC/1w84Qmuif5AS5rlcr/VOMRmUSA1hr9cch7uEOGZT3uO5er5gwHsl4hIJAq3VXBasTWPJl2pln70R7vq+eKdQ8oU2IIkVlJpD680mG/NaDKYYJSaLLJJ6g/T3KUT/QEIYxXsZ/iCTyXuxcTem4WqNw6L330x0hF/RxPO1pl5Vkj6UwmydSaQX/AKIPoadhe6sjcAvS8l5JgUZmigQ2w2YNEpnEm87SnVrwFHa026rFMVKeGDsTVO4pKaBTafBgAOixGQxVrEAncLTwXKZb+pLRNtFhlx/3InpbwaKzxkq+TPjx+KVzDpcuafYr+zsI1LhwmmLEeGMba5xkBUvO/Ff1EfEnCok4bLDGIk9w/wDGPwDaa9y5HK+VI9Jfnxohebgamt2NaKgte5ZubX2vypyj5t7ScJpj9rJzn5fUJ3eZN5N5JvKG5FcE9kvI0akEBgkCZZxBr2NH4j8mFS7URzlrzaKxvLVwoLnuDGtLnOMg0Vk7l6/9PvAYo2bSaQA6kSmxtrYQI5vrtuuTvhXwjCobQ8icV15rIljt2Coc10UlqaTTz47xt+D5ziPEu83x4unnPr9BaTbw/dCmmqLYd/YIy0WKHR9UcepREnHHqPy4IckGwUWvksoM5hwPsVlrTMVG0XbU6qxdU7j0QTSNxHuEOM8ESBmaqhXelleBrD5cUFcw4H2KQy7QTGo8WHKstm2c63tIc0clvUGkmob+xQef+A8oCHGzCZNigD+8Vt9wSPZdzlGCIrHQ7Q5r2GWDhK6xee5doBgUg5tTXHSQyLq5kDc7su58P08Roef+KoPGDq58DbxQidnkfg+nFrXUOJVFhOc0A35pIc0bQQeC6yhZTjQD/TdVe01tPC7gtX9UPCkRkU5QgA5pkYoZrMeKtKJXGqeEp3mXP5N8UGQbGE//ACNv/wCTe49l8nrNHlw5pyYp2l9bjmmqx9uI3iesekvTYHjQf6kEg4sIPIyV3eLaKTP+oJ3ZlnsVxMKlw4mo9rtk6/Y1rERq5Ti+qryt84VrcMwTPSY97tH+LqIP9w7mfuVR/j6jgSbCimWIYO64Z7UB7VL9r559Pg7XhWn/AB+LrqX9RIn+nAaNr3k8gO652neLabEq0uYMIbQ3/K3mta8ILl4trs9+tlrHodPTpSP1LxS5xLnElxtLiSTxKE5qa0ZNgRIdBJtMtyi7fnMrm8Q1rgi0egxImq2r8xqHvfwXR5JyE6If6UIvP5jqj+41Bdxkjwc1snR3Zx/I2YbxN/JT4cebN/bry9Z6Kmo1+LD1nn6ebiMgeEdI6cs+VrnVQ2//AKOzkvTcjZJg0cVEOfYXGXs0fhCdiQmsaGtAaAagBICo4IS2dNoK4p7d57VvX0/KHzuq1+TPy6R6DRzOUq7bK8ELNOB9ijUW/h3TC0FECjuABnVXfVcEXSNxHuEvSdbh3KEgJFEySKxsruCpmHA+xTVH1Rx6lEQI5hwPsVlOqIB6duPIqr4rSCAazVellllo3jqgtoXYdFljC0gkSA/hNodI1Tw6hBNO3HkUOK4OqbWbcOu9ARaNrcO4QazLuSDHhEAetvqYarb27jZ7LlcjU59HiZwB/K9hqmAaxvBXo65rxJkXOOmhj1nWaPxSlWNvVBu4FLhxGBwM2uGB4g/suKy/9N6NHJiUY6B5tAAMIm3Uqzf7atiJkumOhmYrBtabD+xXXZNpbHt9JrtINoqC8XpW8bWhLhz5MNu1SdnjWUPAGUoRqgiK380JzT/i4g+wKQdQ6bCqdDpDZfpiS6SX0AlYpOcflwVO/D8dvNqU41ljxViXgvno17jxH2VhSnn8R9l7qXFNQmiQ3BV54TX/AC+ST7a/1/P6PCoFEpD9WHFduY89AtrRfC9OfZAcBi8sZ1M/YL2NIBeo4Tj87SjvxnJPhrEfz3OHoXgWKZaSMxuxgc87pmQC6Gg+EaPDrMMxDjEIcP8ArZyW5ZaN46pPLOXmQptZJ8T/ABaf1Y7hyVrHocFOlfipZddnydbfDkHljKbaKwVDPOowSlvMrGhcpSvF1NNTXNbOoBjJkm6WdOtJ0+O57i97puNpPyobF0HhjIOYRHij1/gYfwz/ABO/VgLt9ltTbzI8CM2EBGiGJGJznTlJtUs1shKQq3mad0LsOitRtbh+yaQLQjmzzqp2X9N6Lp248ih0q7j2QEBYgzjNtYsw671XQuw6I1FsO/sEZACHEDRI1EK+nbjyKXj6x+XBUQN6duPIrCVUQF8u7ZzU0JFdVVfsmlWLqnceiAfmRgeSq+JnekCs4+/ZAV4GsPlxQW8u7ZzWWtLDM7qvmxMoNKsG/sUE8yMDyVHeuy7Hb/CCj0W/h3QazKGRM+b2yD7xc7lUdq1cOG5jpEFrhwK69JU2G1xkROr970C1Fyg6x3q22H7pmYcZgynilPKysPv+6ZgsOCAugds9yrtjACUjVVdciNsSsdAV1LaLe37rXRqaxv6jss9yhxiljRojtVhPCQ9ygVp2UYjhKeaMG9ytPonOIa1pJNgC6aHkFxE4jpAVybWfc2J6jUZkMSY0DHE7zeg1eRfD7WEPiSdFtaLWM/c7f5W+8u7Zz/ZVgaw+XFOIFmtLDM7qvmxX8yMDyUpVg39ilkBn+uy7Hb/Cx5d2zmrUW/h3TCBdjsyo76vmxW8yMDyQ6TrcO5QkBTDLvULDj7dlPLu2c0aj6o49SiIFfLu2c1E0ogX8zs5/ZYMedUrarcakFZZaN46oDeW28vusGHm+qc5XWW1d0yh0jVPDqEA/M7Of2WM7Pqsvx+WoKLRtbh3CC3ltvL7rGptnws/lMpelXceyCeZ2c/ssZufXZdj8tQUzRbDv7BBXy23l91gRM30ynK+zb3TKTj6x+XBATzOzn9lBBnXO2uUrJoCdhao3DogD5bbyWBSdnP7Jla8IDmPOqVtVuNSz5bby+6Cy0bx1TyBYw831TnK6y2rus+Z2c/siUjVPDqEogNnZ9Vl+Py1Z8tt5fdVo2tw7hNIFtTbPhZ/Kz5nZz+ylKu49kBAbNz67Lsflqz5bby+6tRbDv7BGQLCJm+mU5X2W191nzOzn9kOPrH5cFRAfzOzn9lEBRAz5YYnksOggCczVX7I6rF1TuPRAv5h2zmoIhd6TYcPfshK8DWHy4oDeWGJ5Kr25lY3V/NiYQaVYN/YoB+Yds5rLPXbdht/hBR6Lfw7oLeWGJ5KjnFhkN9fzYmUrSdbh3KCeYds5qzIed6iazh7dkBN0fVHHqUFfLDE8kPTEVVVVeyaSL7TvPVAQ0h2zmieWGJ5JUrYIAOggCczVX7KnmHbOaYi6p3HokkBRELvSbDh79kTywxPJBgaw+XFOIF3tzKxur+bFXzDtnNEpVg39ilkBmeu27Db/AAr+WGJ5KtFv4d0wgWc4sMhvr+bFjzDtnNSk63DuUJAdkPO9RNZw9uyt5YYnkrUfVHHqURAHywxPJRGUQJ6Z2PRZERxqJqNVyGsstG8dUDWgbhzKpEhhomKiEdDpGqeHUIF9M7HorQznGTqxbh03oSLRtbh3CA2gbhzKFFGbLNqnbf13plL0q7j2QD0zseiJCaHVurNmHTegJmi2Hf2CC2gbhzKA9xaSAZAfym0nH1j8uCCaZ2PRGZCaQCRWa7Slk7CsG4dEFNA3DmUARnY8gnFrwgKIjjUTUarkfQNw5lKstG8dU8gBEhhomKiELTOx6Jikap4dQlEBYZzjJ1Ytw6b0bQNw5lBo2tw7hNIFoozZZtU7b+u9U0zseiJSruPZAQHhNDq3VmzDpvRNA3DmVWi2Hf2CMgUe4tJAMgP5WNM7HopH1j8uCogvpnY9FFRRBFllo3jqsqIHUOkap4dQsKIFUWja3DuFFEDSXpV3HsoogAmaLYd/YKKIDJOPrH5cFFEFE7CsG4dFhRBda8LKiDLLRvHVPKKIB0jVPDqEooogLRtbh3CaUUQL0q7j2QFFEDNFsO/sEZRRAnH1j8uCooogiiiiD//Z'
                                alt="profile"
                                className="rounded-full"
                            />
                            <AvatarFallback>FN</AvatarFallback> {/* A fallback in case the image is not loaded */}
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Full name</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
                                similique et distinctio voluptatem, ullam facilis ad aut. Blanditiis,
                                sint, molestiae quam culpa atque suscipit pariatur, dolor delectus
                                accusamus distinctio doloribus?
                            </p>
                        </div>
                    </div>
                    <Button onClick={()=> setOpen(true)} className="text-right" variant="outline">
                        <Pen className="" />
                    </Button>
                </div>
                <div className='my-5'>
                    <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5" />
                            <span>aishm@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 my-2">
                            <Contact className="w-5 h-5" />
                            <span>7972187082</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <h1>Skills</h1>
                    {
                        skills.length != 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>N/A</span>
                    }
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">
                        Resume
                    </Label>
                    {
                        isHaveResume ? <a target='blank' href='https://google.com' className='text-blue-500  hover:underline cursor-pointer'>Aishwarya Mohadikar</a> : <span>N/A</span>
                    }

                </div>
                <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                    <h1>Applied Jobs</h1>
                    <AppliedJobTable/>

                </div>
            </div>
            <UpdateProfileDialog open={open} setOpen = {setOpen}/>
        </div>
    );
}

export default Profile;
