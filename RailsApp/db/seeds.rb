# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first) 
Question.create([                                                                                         
  {question: 'First Name', answer: 'Gaurav', group: 1, subgroup: 1},                            
  {question: 'Last Name', answer: 'Sharma', group: 1, subgroup: 1},                             
  {question: 'Age', answer: '21', group: 1, subgroup: 1},                                       
  {question: 'Gender', answer: 'Male', group: 1, subgroup: 1},                                  
  {question: 'Contact No.', answer: '9087753739', group: 1, subgroup: 1},                       
  {question: 'Email ID', answer: 'gaurav@gmail.com', group: 1, subgroup: 1},                    
  {question: 'House No.', answer: '335', group: 1, subgroup: 1},                                
  {question: 'Street No.', answer: '4', group: 1, subgroup: 1},                                 
  {question: 'City', answer: 'Delhi', group: 1, subgroup: 1},                                   
  {question: 'State', answer: 'Delhi', group: 1, subgroup: 1},                                  
  {question: 'Country', answer: 'India', group: 1, subgroup: 1},                                
  {question: 'Pin Code', answer: '110053', group: 1, subgroup: 1},                              
  {question: 'Payment Option', answer: 'Net Banking', group: 1, subgroup: 1}                    
  ])  
