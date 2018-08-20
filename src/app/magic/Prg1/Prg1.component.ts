import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-Prg1',
    providers: [...magicProviders],
    styleUrls: ['./Prg1.component.css'],
    templateUrl: './Prg1.component.html'
}) export class Prg1 extends TaskBaseMagicComponent {}