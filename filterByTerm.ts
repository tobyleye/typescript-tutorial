interface Link {
  url: string;
  description?: string;
  id?: number;
}

function filterByTerm(input: Array<Link>, searchTerm: string): Array<Link> {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("inputArr cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return input.filter(function (arrayElement) {
      return arrayElement.url.match(regex);
  });
}

const obj1: Link = { url: 'python' };
const obj2: Link = { url: 'golang' }
const obj3: Link = { url: 'java' }

const arrOfLinks: Array<Link> = [obj1, obj2, obj3]

const searchTerm: string = "java"

filterByTerm(arrOfLinks,searchTerm);
