import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BackgroundService} from '../background.service';

@Component({
    selector: 'app-home',
    templateUrl: './teacher-home.component.html',
    styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent {

    form: FormGroup;
    loading: boolean = false;

    @ViewChild('codeOfConductFile', {static: true}) codeOfConductFile: ElementRef;
    @ViewChild('idBack', {static: true}) idBack: ElementRef;
    @ViewChild('idFront', {static: true}) idFront: ElementRef;
    @ViewChild('certificateOne', {static: true}) certificateOne: ElementRef;
    @ViewChild('certificateTwo', {static: true}) certificateTwo: ElementRef;

    constructor(private router: Router,
                private fb: FormBuilder,
                private backgroundService: BackgroundService
    ) {
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
            lastName: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(20)
            ]],
            phoneNumber: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(20)
            ]],
            email: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(35),
                Validators.pattern(/^(.+)@(.+)$/)
            ]],
            codeOfConductFile: null,
            idBack: null,
            idFront: null,
            certificateOne: null,
            certificateTwo: null,
        });
    }

    onFileChange(event) {
        console.log(event);
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    this.form.get(event.target.id).setValue({
                        filename: file.name,
                        filetype: file.type,
                        value: reader.result.split(',')[1]
                    });
                }
            };
        }
    }

    onSubmit() {
        const formModel = this.form.value;
        this.loading = true;
        // In a real-world app you'd have a http request / service call here like
        // this.http.post('apiUrl', formModel)

        console.log(this.form.value);
        this.backgroundService.submitDocs(this.form.value).subscribe({
            next: response => {
                // Navigate to some other route
                this.router.navigateByUrl('/inbox/final');
            },
            error: err => {
                if (!err.status) {
                    this.form.setErrors({noConnection: true});
                } else {
                    this.form.setErrors({unknownError: true});
                }
            }
        });
    }


}
