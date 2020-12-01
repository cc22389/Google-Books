import React from "react";
import "./BookSearch.css";

function BookSearch() {
    return (
        <form>
            <div className="form-group">
                <h2>Book Search</h2>
                <label for="input">Book</label>
                <input type="password" className="form-control" id="bookInput"></input>
                <br></br>
                <button type="submit" className="btn btn-primary">Search</button>
            </div>
        </form>
    );
}

export default BookSearch;