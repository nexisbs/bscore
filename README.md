

### Mongo client

Usage of mongo repository functionality

```typescript
import {Repository, Entity} from 'bsentity';

class Book extends Entity {

    @validate(joi.sting())
    public title = ''

    @type(Int32) // https://stackoverflow.com/questions/30689324/reducing-getter-setter-boilerplate-in-typescript?answertab=votes#tab-top
    public count = 34;

    public toJSON(){
        return {
            title: this.title
        }
    }
}

class BookRepository extends Repository<Book>{

    // method implementation here
}


```

```typescript
let bookRepository = repositoryFactory.get<BOOK_REPOSITORY>(BOOK_REPOSITORY)


```

Later build a script for generating a repository files based on given JSON

1. Approach about numeric data (int32, int64, Long, double64, Date, Timestamp)
2. Add validation of the entitiy
3. Add methods for insert, delete, update, read, replace data in documents ... 
4. Use mongoose for query builder?

Ask five initial question to know what the structure of your data should look like...

write tool to generate a model with repository in very easy way ...  

