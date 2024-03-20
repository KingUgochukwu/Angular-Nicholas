import { Component, OnInit } from '@angular/core';
import { JobListing } from '../src/models';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  jobListing: JobListing[] = [
    {
      id: 'J10001',
      title: 'Senior Software Engineer',
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
      },
      company: {
        name: 'Tech Innovations Inc.',
        industry: 'Information Technology',
        size: '501-1000',
      },
      jobType: 'Full-time',
      experienceLevel: 'Senior Level',
      educationRequired:
        "Bachelor's Degree in Computer Science or related field",
      responsibilities: [
        'Develop and maintain advanced software applications',
        'Lead project teams and mentor junior developers',
        'Collaborate with cross-functional teams to define and achieve project goals',
      ],
      requiredSkills: [
        'Java',
        'Python',
        'Cloud Computing',
        'Microservices',
        'Agile methodology',
      ],
      preferredSkills: ['Docker', 'Kubernetes', 'AWS/GCP/Azure'],
      salary: {
        min: 130000,
        max: 160000,
        currency: 'USD',
      },
      benefits: [
        'Health insurance',
        'Retirement plan',
        'Work from home flexibility',
        'Paid time off',
      ],
      applicationDeadline: '2024-04-30',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
