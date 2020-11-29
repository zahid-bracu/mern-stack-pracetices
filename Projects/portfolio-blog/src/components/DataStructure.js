import React from 'react';

const DataStructure = () => {
    return (
        <div className="container">
            <h5 className="text-center my-5">Important topics of Data Structure</h5>

            
            <div className="row justify-content-center  align-items-center">
                <div className="col-6">
                    <h6>Linear Data Structure</h6>
                    <h6>Basic Data Structures</h6>
                    <ul className="list-unstyled">
                        <li>- Array</li>
                        <li>- Linked List</li>
                        <li>- Set</li>
                        <li>- Stack</li>
                        <li>- Queue</li>
                    </ul>


                    <h6>Advanced Data Structures</h6>
                    <ul className="list-unstyled">
                        <li>- Map</li>
                        <li>- Doubly Linked List</li>
                        <li>- Priority Queue</li>
                        <li>- Dequeue</li>
                    </ul>
                </div>


                <div className="col-6">
                <h6>Non Linear Data Structure</h6>
                <h6>Basic Data Structure</h6>
                <ul className="list-unstyled">
                    <li>- Hash Map</li>
                    <li>- Hash Table</li>
                    <li>- Heaps</li>
                    <li>- Tree</li>
                    <li>- Binary Search Tree</li>
                </ul>

                <h6>Advance Data Structure</h6>
                <ul className="list-unstyled">
                    <li>- Multi way Trees</li>
                    <li>- Trie</li>
                    <li>- Hash Tree</li>
                    <li>- Decision Tree</li>
                    <li>- Graphs</li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default DataStructure;