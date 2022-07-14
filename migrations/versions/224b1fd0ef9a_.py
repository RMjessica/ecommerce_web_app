"""empty message

Revision ID: 224b1fd0ef9a
Revises: 2edc19820b5c
Create Date: 2022-07-14 16:59:04.954865

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '224b1fd0ef9a'
down_revision = '2edc19820b5c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'password',
               existing_type=sa.VARCHAR(length=50),
               type_=sa.Text(),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'password',
               existing_type=sa.Text(),
               type_=sa.VARCHAR(length=50),
               existing_nullable=False)
    # ### end Alembic commands ###