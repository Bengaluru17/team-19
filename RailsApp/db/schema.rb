# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170708223658) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.integer  "students_id"
    t.integer  "group"
    t.integer  "subgroup"
    t.integer  "mistakes",     default: [],              array: true
    t.integer  "student_name"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.index ["students_id"], name: "index_answers_on_students_id", using: :btree
  end

  create_table "questions", force: :cascade do |t|
    t.string   "question",   null: false
    t.string   "answer",     null: false
    t.integer  "group"
    t.integer  "subgroup"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", force: :cascade do |t|
    t.string   "username",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "username"
    t.index ["reset_password_token"], name: "index_students_on_reset_password_token", unique: true, using: :btree
    t.index ["username"], name: "index_students_on_username", unique: true, using: :btree
  end

  add_foreign_key "answers", "students", column: "students_id"
end
