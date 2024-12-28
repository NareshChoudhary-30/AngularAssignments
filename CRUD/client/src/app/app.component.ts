import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsService } from './details.service';
import { BatchData } from './batch.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  message : any;
  newBatch : BatchData = new BatchData; 
  updateBatch = { id: '', Name: '', Fees: '', Duration: '' };
  deleteId = '';

  constructor(private service : DetailsService)
  {}

  fetchData() : void
  {
    this.service.getBatches().subscribe(data=>{
      this.message = data;
    },
  error =>{
    console.error("Error fetching data :",error);
  })
  }

  createRecord() : void
  {
    this.service.createBatch(this.newBatch).subscribe(
      response => {
        console.log("Record added ",response);
        this.fetchData();
      },
      error =>{
        console.error("Error adding record ",error);
      }
    );
  }

  deleteRecord() : void
  {
    if(!this.deleteId.trim())
    {
      alert("Please enter a valid ID");
      return;
    }

    this.service.deleteBatch(this.deleteId).subscribe(
      response => {
        console.log("Record Deleted",response);
        this.fetchData();
      },
      error =>{
        console.error("Error deleting record",error);
      }
    );
  }

  updateRecord():void
  {
    if(!this.updateBatch.id)
    {
      alert("Please enter a valid Batch ID");
      return;
    }

    this.service.updateBatch(this.updateBatch).subscribe(
      response => {
        console.log("Record updated",response);
        this.updateBatch = {id : '',Name : '',Fees : '',Duration : ''};
        this.fetchData();
      },
      error => {
        console.error("Error updating record",error);
        alert("Failed to update the batch.");
      }
    );
  }
}
