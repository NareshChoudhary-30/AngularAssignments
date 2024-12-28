import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService 
{
  constructor(private http : HttpClient) { }

  getBatches()
  {
    return this.http.get("http://localhost:5100/getBatches");
  }

  createBatch(batch : any)
  {
    return this.http.post("http://localhost:5100/createBatch", batch)
  }

  deleteBatch(id : string)
  {
    return this.http.delete(`http://localhost:5100/deleteBatch/${id}`);
  }

  updateBatch(batch :{id : string; Name:string;Fees : string;Duration:string})
  {
    return this.http.put(`http://localhost:5100/updateBatch/${batch.id}`,batch);
  }
}
