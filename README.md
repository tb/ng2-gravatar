# ng2-gravatar-directive

Angular2+ gravatar directive

## Install

    npm i --save ng2-gravatar-directive

## Import

    import { GravatarModule } from 'ng2-gravatar-directive';

## Usage

    @NgModule({
        imports: [
            ...,
            GravatarModule,
        ]
    })
    
    <img gravatar [email]="user.email" [size]="16">
    
## License

MIT
