import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-Prg2',
    providers: [...matMagicProviders],
    styleUrls: ['./Prg2.component.css'],
    templateUrl: './Prg2.component.html'
}) export class Prg2 extends BaseMatTableMagicComponent {
    displayedColumns = ['Column4',
        'Column5',
    ];
}