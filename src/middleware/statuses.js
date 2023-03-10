const statuses = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING'
}

const statusValidation = (status) => {
  return (req, res, next) => {
    if (status === req.user.status) {
      return res.status(401).json({
        success: false,
        message: 'user.status.denied'
      })
    }

    next()
  }
}

module.exports = { statusValidation, statuses }
